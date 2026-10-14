// Company and contact details used across the site.
// Contact numbers are the current ones supplied by the company; the older numbers,
// landlines and email printed in the company profile are deliberately not used.

export const site = {
  name: 'Sofia Orient Security Services',
  legalName: 'Sofia Orient Security Services (Pvt.) Ltd.',
  shortName: 'SOS',
  url: 'https://sofiaorientsecurity.com',
  city: 'Karachi',
  country: 'Pakistan',
  description:
    'Sofia Orient Security Services (Pvt.) Ltd. is a Karachi-based private security company providing security guards, escort services, security and communication equipment, and video digital surveillance.',
  phone: {
    display: '+92 303 2230426',
    href: 'tel:+923032230426',
    e164: '+923032230426',
  },
  whatsapp: {
    display: '+92 323 9260404',
    number: '923239260404',
    href: 'https://wa.me/923239260404',
  },
} as const;

/** WhatsApp link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  return message ? `${site.whatsapp.href}?text=${encodeURIComponent(message)}` : site.whatsapp.href;
}

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/training-operations/', label: 'Training & Operations' },
  { href: '/clients/', label: 'Clients' },
  { href: '/credentials/', label: 'Credentials' },
  { href: '/contact/', label: 'Contact' },
] as const;
