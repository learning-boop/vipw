// All site copy and facts live here, so content updates never touch components.
// Facts are taken from vipw.in and the institute's header (NAAC grade, counselling codes).

const base = import.meta.env.BASE_URL;

export const ASSETS = {
  logo: `${base}srk-logo.png`,
  naac: `${base}naac-a-plus.png`,
};

export const INSTITUTE = {
  name: 'Vijaya Institute of Pharmaceutical Sciences for Women',
  short: 'VIPW',
  founded: 2009,
  foundation: 'S.R.K. Foundation',
};

export const CODES = {
  eapcet: 'VIPW', // AP EAPCET (EAMCET) and ECET counselling code
  pgecet: 'VIPW1', // PGECET counselling code
};

export const CONTACT = {
  phones: [
    { label: '+91 741 656 0999', href: 'tel:+917416560999' },
    { label: '+91 800 865 1333', href: 'tel:+918008651333' },
  ],
  email: 'vijayapharmacyfw@gmail.com',
  addressShort: 'Prathap Industries Road, Enikepadu, Vijayawada 521108',
  addressFull:
    'Prathap Industries Road, Enikepadu, Vijayawada Rural, Andhra Pradesh 521108',
  map: 'https://maps.app.goo.gl/kf8RavP9P5rr5E9c8',
  facebook:
    'https://www.facebook.com/Vijaya-institute-of-pharmaceutical-sciences-for-women-2255611581194600',
  youtube: 'https://www.youtube.com/channel/UCBLrYsTIY4xSqXKsxX7ardw',
};

export const ADMISSION_YEAR = '2026–27';

// Official admission enquiry Google Form linked from the vipw.in notice board.
export const ENQUIRY_FORM = 'https://forms.gle/m21NjhbKM9m7GSnY8';
export const BROCHURE = 'https://vipw.in/images/7e33f333992bab1b7ea480b35b40c68c.pdf';

export const NAV_LINKS = [
  { label: 'About', href: '#why' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus life', href: '#campus' },
  { label: 'Disclosures', href: '#disclosures' },
];

export const MARQUEE = [
  'NAAC A+ · CGPA 3.37',
  'Pharmacy Council of India',
  'AICTE',
  'JNTU Kakinada',
  'UGC Autonomous',
  'ISO 9001:2015',
  'Govt. of Andhra Pradesh',
  'NPTEL Local Chapter',
];

export const HERO_TRUST = ['NAAC A+', 'PCI approved', 'UGC Autonomous', 'JNTU Kakinada'];

// Notice board items, from the "Current events" panel on vipw.in.
export const NOTICES = [
  { text: `Admissions open for B.Pharm, M.Pharm, Pharm D and Pharm D (PB), ${ADMISSION_YEAR}`, href: '#admissions' },
  { text: `For admission enquiries (${ADMISSION_YEAR}), fill out the Google Form`, href: ENQUIRY_FORM },
  { text: 'Congratulations to our PGECET 2026 rankers', href: 'https://vipw.in/gallery.php' },
  { text: 'Placement selection process on campus', href: 'https://vipw.in/page.php?title=training-placement-cell&title1=placements&id=19' },
];

// "Why VIPW" drawn as a periodic table. `group` picks the tile colour.
export const ELEMENTS = [
  { n: 1, sym: 'Wo', name: 'Women first', group: 'red', text: 'A Women Empowerment Cell, an Internal Complaints Committee, dedicated facilities for women and an active anti-ragging squad.' },
  { n: 2, sym: 'Dp', name: 'Five departments', group: 'navy', text: 'Pharmaceutics, Pharmacology, Pharmaceutical Analysis, Pharmaceutical Chemistry and Pharmacy Practice.' },
  { n: 3, sym: 'Rs', name: 'Research', group: 'steel', text: 'A Centre of Excellence, an Institutional Innovation Cell, approved Ph.D guides, publications and patents.' },
  { n: 4, sym: 'Cl', name: 'Clinical exposure', group: 'steel', text: 'A Drug and Poison Information Centre on campus, and MOUs with hospitals, industries and institutes.' },
  { n: 5, sym: 'Pl', name: 'Placements', group: 'navy', text: 'A Training and Placement Cell, career counselling, and a track record of GPAT, PGECET and NIPER rankers.' },
  { n: 6, sym: 'A+', name: 'NAAC graded', group: 'gold', text: 'NAAC A+ with a CGPA of 3.37 in its first cycle, UGC autonomous with its own examination cell, and ISO 9001:2015 certified.' },
];

export const STATS = [
  { from: 1990, to: 2009, decimals: 0, label: 'Year founded by the S.R.K. Foundation' },
  { from: 0, to: 3.37, decimals: 2, label: 'NAAC CGPA, graded A+ in the first cycle' },
  { from: 0, to: 200, decimals: 0, label: 'Seats every year' },
  { from: 0, to: 7, decimals: 0, label: 'Programmes and specialisations' },
  { from: 0, to: 5, decimals: 0, label: 'Teaching departments' },
];

export const WHY = [
  {
    icon: 'shield',
    title: 'A campus designed for women',
    text: 'A Women Empowerment Cell, dedicated facilities for women, an Internal Complaints Committee and an active anti-ragging squad.',
  },
  {
    icon: 'layers',
    title: 'Five teaching departments',
    text: 'Pharmaceutics, Pharmacology, Pharmaceutical Analysis, Pharmaceutical Chemistry and Pharmacy Practice.',
  },
  {
    icon: 'flask',
    title: 'Research from day one',
    text: 'A Centre of Excellence, an Institutional Innovation Cell, approved Ph.D guides, publications and patents.',
  },
  {
    icon: 'pill',
    title: 'Clinical exposure',
    text: 'A Drug and Poison Information Centre on campus, and MOUs with hospitals, industries and institutes.',
  },
  {
    icon: 'briefcase',
    title: 'Ready for what comes next',
    text: 'A Training and Placement Cell, career counselling, and a track record of GPAT, PGECET and NIPER rankers.',
  },
  {
    icon: 'award',
    title: 'NAAC A+ and autonomous',
    text: 'Graded A+ by NAAC with a CGPA of 3.37 in its first cycle, UGC autonomous with its own examination cell, and ISO 9001:2015 certified.',
  },
];

export const PROGRAMME_TABS = [
  {
    id: 'ug',
    label: 'Undergraduate',
    layout: 'wide',
    items: [
      {
        kicker: 'Undergraduate',
        name: 'B.Pharmacy',
        years: 4,
        seats: 100,
        convener: 70,
        management: 30,
        text: 'The core pharmacy degree, covering pharmaceutics, pharmacology, pharmaceutical chemistry and analysis.',
        tags: [`Entry: AP EAPCET · code ${CODES.eapcet}`, `Lateral entry to year 2: ECET · code ${CODES.eapcet}`],
      },
      {
        kicker: 'Undergraduate · Clinical',
        name: 'Pharm D',
        years: 6,
        seats: 30,
        convener: 21,
        management: 9,
        text: 'The Doctor of Pharmacy programme, preparing pharmacists for hospital practice and patient care.',
        tags: [`Entry: AP EAPCET · code ${CODES.eapcet}`],
      },
    ],
  },
  {
    id: 'pg',
    label: 'Postgraduate',
    layout: 'compact',
    intro: `M.Pharmacy · 2 years · 15 seats per specialisation (11 convener · 4 management) · Entry through PGECET (code ${CODES.pgecet}) or GPAT`,
    items: [
      'Pharmaceutics',
      'Pharmacology',
      'Pharmaceutical Analysis',
      'Pharmaceutical Regulatory Affairs',
    ].map((name) => ({
      kicker: 'M.Pharmacy',
      name,
      years: 2,
      seats: 15,
      convener: 11,
      management: 4,
    })),
  },
  {
    id: 'pb',
    label: 'Post-baccalaureate',
    layout: 'wide',
    items: [
      {
        kicker: 'Post-baccalaureate',
        name: 'Pharm D (PB)',
        years: 3,
        seats: 10,
        convener: 7,
        management: 3,
        text: 'For B.Pharm graduates who want to move into clinical pharmacy practice.',
        tags: [`Entry: PGECET · code ${CODES.pgecet}`],
      },
    ],
    promo: {
      text: 'Already hold a B.Pharm? Pharm D (PB) takes you into clinical practice in three years.',
      cta: 'Ask about Pharm D (PB)',
    },
  },
];

export const STEPS = [
  {
    title: 'Choose a programme',
    text: 'B.Pharm, Pharm D, M.Pharm or Pharm D (PB). Compare duration, seats and specialisations above.',
  },
  {
    title: 'Take the entrance test',
    text: 'AP EAPCET (EAMCET) for B.Pharm and Pharm D, PGECET or GPAT for M.Pharm, PGECET for Pharm D (PB), and ECET for lateral entry.',
  },
  {
    title: 'Pick your quota',
    text: 'A convener seat through state counselling using the codes below, or a management seat applied for directly with the Category B form.',
  },
  {
    title: 'Talk to admissions',
    text: 'Call +91 741 656 0999 or send an enquiry, and the team will guide you through documents and fees.',
  },
];

export const COUNSELLING_CODES = [
  {
    exam: 'AP EAPCET (EAMCET) / ECET counselling code',
    code: CODES.eapcet,
    for: 'B.Pharmacy · Pharm D · B.Pharm lateral entry',
  },
  {
    exam: 'PGECET counselling code',
    code: CODES.pgecet,
    for: 'M.Pharmacy · Pharm D (PB)',
  },
];

export const ADMISSION_LINKS = [
  {
    label: 'Category B form: B.Pharm and Pharm D',
    href: 'https://vipw.in/images/db7dc0297f89553c45a1e6bc45b3a978.pdf',
    primary: true,
  },
  {
    label: 'Category B form: M.Pharm and Pharm D (PB)',
    href: 'https://vipw.in/images/a088a2e994ad13f9ca2e35e5ae416d71.pdf',
  },
  { label: 'Fee details', href: 'https://vipw.in/feedetails.php' },
  { label: 'VIPW brochure (PDF)', href: BROCHURE },
  { label: 'NRI / PIO students', href: 'https://vipw.in/nri-pio.php' },
];

// Photos from vipw.in/gallery.php, resized to 960px wide and stored in public/images.
// `href` opens the full album on vipw.in.
const IMG = `${base}images/`;
const ALBUM = 'https://vipw.in/gallerydetails.php?title=';

export const CAMPUS = [
  {
    title: 'Yogasana sports championship',
    text: 'Sport and fitness, from Fit India drives to inter-college championships.',
    photo: `${IMG}yogasana-championship.jpg`,
    href: `${ALBUM}yogasana-sports-championship-`,
  },
  {
    title: 'Industrial visit',
    text: 'Students see pharmaceutical manufacturing first-hand.',
    photo: `${IMG}industrial-visit.jpg`,
    href: `${ALBUM}industrial-visit`,
  },
  {
    title: 'NSS Day',
    text: 'Health camps and outreach through the National Service Scheme.',
    photo: `${IMG}nss-day.jpg`,
    href: `${ALBUM}nss-day-`,
  },
  {
    title: 'Sri Dhanvantari Jayanthi',
    text: 'Celebrating the patron of medicine on campus.',
    photo: `${IMG}dhanvantari-jayanthi.jpg`,
    href: `${ALBUM}sri-dhanvantari-jayanthi-`,
  },
  {
    title: 'Town hall discussion forum',
    text: 'Students debate and present on issues that matter.',
    photo: `${IMG}town-hall-forum.jpg`,
    href: `${ALBUM}town-hall-discussion-forum-`,
  },
  {
    title: 'Yuva Utsav',
    text: 'District-level youth festival, with VIPW students on stage.',
    photo: `${IMG}yuva-utsav.jpg`,
    href: `${ALBUM}district-level-program-yuva-utsav`,
  },
  {
    title: 'Alumni talk',
    text: 'Graduates come back to share what pharmacy careers look like.',
    photo: `${IMG}alumni-talk.jpg`,
    href: `${ALBUM}alumni-talk`,
  },
];

// The two videos embedded on the vipw.in homepage.
export const VIDEOS = [
  { id: 'VkWbLTwqg2g', title: 'Women Symbol Formation @ VIPW' },
  { id: 'wBs7ptXXa7U', title: 'Campus life @ Vijaya Institute' },
];


export const DISCLOSURES = [
  { title: 'NAAC A+', sub: 'SSR, AQARs and criteria', href: 'https://vipw.in/page.php?title=naac&title1=naac-report&id=10' },
  { title: 'NIRF', sub: 'Data submitted for rankings', href: 'https://vipw.in/page.php?title=nirf&id=127' },
  { title: 'UGC Autonomous', sub: 'Governing body, academic council', href: 'https://vipw.in/page.php?title=ugc&title1=autonomous-&id=132' },
  { title: 'Approvals', sub: 'PCI, AICTE, JNTU Kakinada', href: 'https://vipw.in/approvals-affliliations.php' },
  { title: 'IQAC', sub: 'Initiatives, members, reports', href: 'https://vipw.in/page.php?title=iqac-initiative&title1=iqac-initiatives&id=2' },
  { title: 'Mandatory disclosure', sub: 'PDF', href: 'https://vipw.in/images/4f6d7aa2ff3caf5f979b4c0cd90d29f6.pdf' },
  { title: 'Examination cell', sub: 'Results, notifications, timetables', href: 'https://vipw.in/page.php?title=examination-cell&title1=results&id=14' },
  { title: 'Grievance redressal', sub: 'WGRC, SGRC, ICC', href: 'https://vipw.in/page.php?title=grievances&title1=wgrc&id=53' },
  { title: 'Anti-ragging', sub: 'Committee, squad, complaints', href: 'https://vipw.in/page.php?title=anti-ragging-cell&title1=committee&id=24' },
];

export const ENQUIRY_PROGRAMMES = [
  'B.Pharmacy',
  'Pharm D',
  'Pharm D (PB)',
  'M.Pharm: Pharmaceutics',
  'M.Pharm: Pharmacology',
  'M.Pharm: Pharmaceutical Analysis',
  'M.Pharm: Pharmaceutical Regulatory Affairs',
];

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About VIPW', href: '#why' },
      { label: 'Programmes', href: '#programmes' },
      { label: 'Admissions', href: '#admissions' },
      { label: 'Campus life', href: '#campus' },
      { label: 'Gallery', href: 'https://vipw.in/gallery.php' },
      { label: 'Committees', href: 'https://vipw.in/committees.php' },
      { label: 'Press and media', href: 'https://vipw.in/press-media.php' },
      { label: 'Green initiative', href: 'https://vipw.in/green-initiative.php' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Results', href: 'https://vipw.in/page.php?title=examination-cell&title1=results&id=14' },
      { label: 'Syllabus', href: 'https://vipw.in/academics.php?title=syllabus' },
      { label: 'Academic calendar', href: 'https://vipw.in/academics.php?title=academic-calender' },
      { label: 'Library e-resources', href: 'https://vipw.in/pages.php?title=resources' },
      { label: 'Placements', href: 'https://vipw.in/page.php?title=training-placement-cell&title1=placements&id=19' },
    ],
  },
  {
    title: 'Disclosures',
    links: [
      { label: 'NAAC and NIRF', href: '#disclosures' },
      { label: 'UGC Autonomous', href: '#disclosures' },
      { label: 'IQAC', href: '#disclosures' },
      { label: 'Mandatory disclosure', href: 'https://vipw.in/images/4f6d7aa2ff3caf5f979b4c0cd90d29f6.pdf' },
      { label: 'Important websites', href: 'https://vipw.in/images/7def4cdd79d6dddc48ae16ec719bda99.pdf' },
    ],
  },
];
