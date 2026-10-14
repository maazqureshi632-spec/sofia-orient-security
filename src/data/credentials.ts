// Certificates and letters reproduced in the company profile. These are historical documents:
// the site never states that a licence, NOC or membership is currently valid.
import type { ImageMetadata } from 'astro';
import incorporation from '../assets/credentials/incorporation-1995.png';
import moiNoc from '../assets/credentials/moi-noc-1999.png';
import sindhNoc1 from '../assets/credentials/sindh-noc-1999-p1.png';
import sindhNoc2 from '../assets/credentials/sindh-noc-1999-p2.png';
import appreciation from '../assets/credentials/sindh-appreciation-2002.png';
import ntn from '../assets/credentials/ntn-2003.png';
import apsaa from '../assets/credentials/apsaa-membership-2016.png';
import srb from '../assets/credentials/srb-registration-2018.png';
import licence from '../assets/credentials/sindh-licence-40.png';

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  /** Sort key: year the document is dated, or null when the date is not legible. */
  year: number | null;
  description: string;
  images: { src: ImageMetadata; alt: string }[];
}

export const credentials: Credential[] = [
  {
    id: 'incorporation',
    title: 'Certificate of Incorporation',
    issuer: 'Joint Registrar of Companies, Government of Pakistan',
    date: '6 June 1995',
    year: 1995,
    description:
      'Incorporation of Sofia Orient Security Services (Private) Limited under the Companies Ordinance, 1984, as a private company limited by shares. Company Registration No. K-06060 of 1994-95.',
    images: [{ src: incorporation, alt: 'Certificate of Incorporation, Government of Pakistan, dated 6 June 1995' }],
  },
  {
    id: 'moi-noc',
    title: 'No-Objection Letter',
    issuer: 'Ministry of Interior, Government of Pakistan',
    date: '13 July 1999',
    year: 1999,
    description:
      'Letter to the Home Secretary, Government of Sindh, stating that the Ministry had no objection to the company operating as a private security company in Sindh, subject to the usual terms and conditions.',
    images: [{ src: moiNoc, alt: 'Ministry of Interior letter No. 4/14/97-Security.III dated 13 July 1999' }],
  },
  {
    id: 'sindh-noc',
    title: 'Grant of Provisional NOC',
    issuer: 'Home Department, Government of Sindh',
    date: '20 August 1999',
    year: 1999,
    description:
      'Provisional no-objection to the functioning of the agency in the province of Sindh, subject to the conditions set out in the letter. As issued, it was valid for one year, with renewal required each year.',
    images: [
      { src: sindhNoc1, alt: 'Home Department, Government of Sindh, grant of provisional NOC dated 20 August 1999, page 1' },
      { src: sindhNoc2, alt: 'Home Department, Government of Sindh, grant of provisional NOC, page 2' },
    ],
  },
  {
    id: 'appreciation',
    title: 'Certificate of Appreciation',
    issuer: 'Home Department, Government of Sindh',
    date: '23 November 2002',
    year: 2002,
    description:
      'Appreciation of the assistance rendered to the Government of Sindh on the occasion of the General Election 2002 in law enforcement and the maintenance of peace and order.',
    images: [{ src: appreciation, alt: 'Certificate of Appreciation from the Home Department, Government of Sindh, dated 23 November 2002' }],
  },
  {
    id: 'ntn',
    title: 'National Tax Number Certificate',
    issuer: 'Central Board of Revenue, Government of Pakistan',
    date: '23 April 2003',
    year: 2003,
    description: 'National Tax Number certificate issued to the company under section 20 of the Finance Act, 1999.',
    images: [{ src: ntn, alt: 'National Tax Number certificate dated 23 April 2003' }],
  },
  {
    id: 'apsaa',
    title: 'Certificate of Membership',
    issuer: 'All Pakistan Security Agencies Association (APSAA)',
    date: 'For the year 2016',
    year: 2016,
    description: 'Membership of the All Pakistan Security Agencies Association, awarded for the year 2016.',
    images: [{ src: apsaa, alt: 'APSAA Certificate of Membership for the year 2016' }],
  },
  {
    id: 'srb',
    title: 'Sindh Sales Tax Registration Certificate',
    issuer: 'Sindh Revenue Board, Government of Sindh',
    date: '27 March 2018',
    year: 2018,
    description:
      'Registration under the Sindh Sales Tax on Services Act, 2011, with “Security Agencies” as the principal service activity. Registration effective from 4 March 2014; certificate issued 27 March 2018.',
    images: [{ src: srb, alt: 'Sindh Revenue Board Sindh Sales Tax registration certificate issued 27 March 2018' }],
  },
  {
    id: 'licence',
    title: 'Licence for Security Services',
    issuer: 'Home Department, Government of Sindh',
    date: 'Licence No. 40 (issue date not legible)',
    year: null,
    description:
      'Licence granted under section 5 of the Sindh Security Agencies (Regulation & Control) Ordinance, 2000 to operate as a private security agency in Sindh. As printed, the licence expires unless renewed under the rules.',
    images: [{ src: licence, alt: 'Home Department, Government of Sindh, Licence for Security Services No. 40' }],
  },
];
