// Company content, taken from the company profile ("Updated Profile.pdf").
// Wording is tidied for the web; facts, names and dates are kept as stated in the source.

export type IconName =
  | 'shield' | 'escort' | 'camera' | 'radio' | 'equipment' | 'check' | 'id' | 'police' | 'home'
  | 'book' | 'target' | 'fire' | 'user' | 'law' | 'team' | 'control' | 'clock' | 'phone'
  | 'whatsapp' | 'mail' | 'alert' | 'ambulance' | 'send' | 'route' | 'eye' | 'doc' | 'search' | 'arrow';

export const services = [
  {
    slug: 'security-guards',
    icon: 'shield',
    title: 'Security Guards',
    summary:
      'Guards who meet the company’s selection criteria, pass NADRA, police and home-town verification, and complete training before deployment.',
    points: [
      'Selection criteria covering age, fitness, literacy and weapon handling',
      'Verification through Verisys–NADRA, local police and home town',
      'Training through the APSAA Training School',
      'Supported by supervisors, checking staff and a round-the-clock control room',
    ],
  },
  {
    slug: 'escort-services',
    icon: 'escort',
    title: 'Escort Services',
    summary:
      'Escort services are part of the company’s service offering. Contact us to discuss your requirement and arrangements.',
    points: ['Discuss scope, timings and locations with our team', 'Request a quotation by phone, WhatsApp or the quote form'],
  },
  {
    slug: 'security-equipment',
    icon: 'equipment',
    title: 'Security Equipment',
    summary:
      'Security equipment is offered alongside our guarding services. Tell us about your premises and we will advise on what is available.',
    points: ['Discuss your premises and requirement with our team', 'Request a quotation by phone, WhatsApp or the quote form'],
  },
  {
    slug: 'communication-equipment',
    icon: 'radio',
    title: 'Communication Equipment',
    summary:
      'Motorola P110 portable radios keep guards in contact with each other, and walkie-talkies can be provided to armed guards for mutual communication in an emergency.',
    points: [
      'Motorola P110 portable radios for guard-to-guard contact',
      'Walkie-talkies for armed guards where required',
      'Mobile vehicles, checking and deployment officers linked through a base station and mobile phones',
    ],
  },
  {
    slug: 'video-digital-surveillance',
    icon: 'camera',
    title: 'Video Digital Surveillance',
    summary:
      'Video digital surveillance is offered as part of our services. Contact us to discuss coverage for your premises.',
    points: ['Discuss the areas you need covered', 'Request a quotation by phone, WhatsApp or the quote form'],
  },
] as const satisfies readonly { slug: string; icon: IconName; title: string; summary: string; points: readonly string[] }[];

export const guardCriteria = [
  'Aged between 20 and 50 years',
  'Medically fit',
  'Trained in weapon handling',
  'Trained through APSAA',
  'Able to read and write',
  'CNIC verified from NADRA',
  'Not convicted by any court of law',
];

export const supervisorCriteria = [
  'Matriculate',
  'Able to command and control',
  'Medically and physically fit, with a good bearing',
];

export const supervisorNote =
  'After selection, supervisors undergo a proper medical check-up and, if declared fit, are sent to the APSAA Training School for basic training.';

export const verification = [
  { icon: 'id', title: 'CNIC verification', text: 'Identity verified through Verisys – NADRA.' },
  { icon: 'police', title: 'Local police verification', text: 'Verification with the local police.' },
  { icon: 'home', title: 'Home-town verification', text: 'Home-town verification carried out by APSAA or the company.' },
] as const satisfies readonly { icon: IconName; title: string; text: string }[];

export const guardTraining = [
  { icon: 'book', title: 'Guards Basic Orientation Course' },
  { icon: 'target', title: 'Weapon Handling Course' },
  { icon: 'fire', title: 'Fire Fighting & Emergency Procedures' },
  { icon: 'user', title: 'Body Guard Training' },
] as const satisfies readonly { icon: IconName; title: string }[];

export const supervisorTraining = [
  { icon: 'team', title: 'Supervisor Training Course' },
  { icon: 'law', title: 'Basic Law Course' },
  { icon: 'user', title: 'Man Management' },
] as const satisfies readonly { icon: IconName; title: string }[];

export const controlRoom = [
  'Manned round the clock',
  'Receives all messages',
  'Takes appropriate action',
  'In an emergency, contacts the police on 15 immediately and informs the Response Team and Manager Operations',
];

export const checking = [
  { who: 'Checking supervisors', when: 'Daily, physical checks starting at 07:00 and 19:00' },
  { who: 'Manager Operations', when: 'Once a week' },
  { who: 'General Manager', when: 'Once a month' },
];

export const monitoring = ['Checking staff', 'Manager Operations', 'General Manager', 'Feedback from clients'];

export const jumpDeployment = ['Inform Manager Operations', 'Nominate guards from the reserve', 'Dispatch the guard to the location'];

export const reportingChannels = [
  'By telephone or wireless set to the control room and Manager Operations',
  'Through checking staff to Manager Operations',
  'By mobile phone or wireless set to the control room and Manager Operations',
  'Manager Operations takes the necessary action and informs the General Manager, who informs the Managing Director',
];

export const emergencyResponse = [
  { icon: 'alert', title: 'Immediate action', text: 'On receipt of information, the duty clerk or officer takes immediate action and informs Manager Operations.' },
  { icon: 'police', title: 'Police', text: 'The police are informed on 15, if necessary.' },
  { icon: 'ambulance', title: 'Ambulance', text: 'An ambulance is called, if required.' },
  { icon: 'route', title: 'Response team', text: 'A response team is dispatched.' },
  { icon: 'send', title: 'Everyone informed', text: 'All concerned are informed.' },
] as const satisfies readonly { icon: IconName; title: string; text: string }[];

export const incidentChain = ['Guard', 'Control Room', 'Manager Operations', 'General Manager', 'CEO', 'Legal Advisor / Police (if required)'];

export const communication = ['Landlines', 'Wireless', 'Mobile phones'];

export const benefits = ['Group insurance', 'S.E.S.S.I.', 'E.O.B.I.', 'Education cess', 'Medical'];

export const accommodation =
  'Guards are offered free single accommodation. Transport is also available, in emergencies only.';

export const orgChart = {
  top: ['CEO', 'General Manager'],
  operations: ['Manager Operation', 'CSO Operation', 'Security Officers', 'Guards'],
  admin: { manager: 'Manager Admin', cso: 'CSO Admin', teams: ['Accountant', 'Operators', 'Quarter Master', 'Maintenance / Others'] },
};

/** Company history, as recorded in the company profile and the documents it reproduces. */
export const history = [
  {
    date: '6 June 1995',
    title: 'Incorporated',
    text: 'Incorporated in Karachi under the Companies Ordinance, 1984 as Sofia Orient Security Services (Private) Limited, Company Registration No. K-06060 of 1994-95.',
  },
  { date: '1998', title: 'NOC requested', text: 'The Ministry of Interior, Government of Pakistan, was requested to grant an NOC to the company.' },
  {
    date: '13 July 1999',
    title: 'Ministry of Interior',
    text: 'The Ministry of Interior conveyed that it had no objection to the company operating as a private security company in Sindh (No. 4/14/97-Security.III).',
  },
  {
    date: '20 August 1999',
    title: 'Home Department, Government of Sindh',
    text: 'A provisional NOC was granted for the functioning of the agency in the province of Sindh (No. SO(A&S) HD-7(32)/95).',
  },
  { date: '10 March 2000', title: 'Operations began', text: 'The company started operating from rented commercial premises in Gulshan-e-Iqbal, Karachi.' },
  {
    date: '23 November 2002',
    title: 'Certificate of Appreciation',
    text: 'The Home Department, Government of Sindh, recognised the company’s assistance during the General Election 2002 in law enforcement and the maintenance of peace and order.',
  },
  { date: '23 April 2003', title: 'National Tax Number', text: 'NTN certificate issued by the Central Board of Revenue.' },
  { date: '2016', title: 'APSAA membership', text: 'Certificate of Membership of the All Pakistan Security Agencies Association for the year 2016.' },
  {
    date: '27 March 2018',
    title: 'Sindh Revenue Board',
    text: 'Sindh Sales Tax registration certificate issued, with registration effective from 4 March 2014.',
  },
];
