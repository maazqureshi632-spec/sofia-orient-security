// Packages the built site (dist/) into a ZIP for manual upload to Hostinger's public_html.
// Run after `npm run build` (or use `npm run package:hostinger`, which builds first).
// The ZIP holds the *contents* of dist/ at its root, including the hidden .htaccess file.
import { existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const zipName = 'sofia-orient-hostinger-upload.zip';
const zipPath = join(root, zipName);

const required = ['index.html', '404.html', '.htaccess', 'robots.txt', 'sitemap.xml', '_astro'];
const missing = required.filter((f) => !existsSync(join(dist, f)));
if (missing.length) {
  console.error(`dist/ is incomplete (missing: ${missing.join(', ')}). Run "npm run build" first.`);
  process.exit(1);
}

// Never ship the company profile PDF or any other PDF.
const pdfs = readdirSync(dist, { recursive: true }).filter((f) => String(f).toLowerCase().endsWith('.pdf'));
if (pdfs.length) {
  console.error(`Refusing to package: PDF files found in dist/: ${pdfs.join(', ')}`);
  process.exit(1);
}

if (existsSync(zipPath)) rmSync(zipPath);

// List top-level entries explicitly so ZIP paths are clean (no leading ./) and .htaccess is included.
const entries = readdirSync(dist);

// Windows ships bsdtar, which can write ZIP files; elsewhere use the zip command.
if (process.platform === 'win32') {
  const tar = join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe');
  execFileSync(tar, ['-a', '-c', '-f', zipPath, '-C', dist, ...entries], { stdio: 'inherit' });
} else {
  execFileSync('zip', ['-r', '-q', zipPath, ...entries], { cwd: dist, stdio: 'inherit' });
}

const kb = Math.round(statSync(zipPath).size / 1024);
console.log(`Created ${zipName} (${kb} KB). Upload it to public_html and extract it there.`);
