// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sofiaorientsecurity.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  server: { host: '127.0.0.1', port: 4330 },
  preview: { host: '127.0.0.1', port: 4331 },
});
