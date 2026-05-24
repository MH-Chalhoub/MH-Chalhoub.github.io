import type { NavItem, Project, SkillCategory, SocialLink, Stat } from './types'

const CV_HREF = '/Mohamad_Chalhoub_GIS_CV___EN.pdf'
const CV_DOWNLOAD_NAME = 'Mohamad-Chalhoub-GIS-CV.pdf'

/**
 * Site copy and data — synced from your live pages at
 * https://mh-chalhoub.github.io/ plus GeoAI roadmap items.
 * Add map embeds, CV links, and new projects here as you go.
 */
export const site = {
  name: 'Mohamad Chalhoub',
  role: 'GeoAI Engineer',
  tagline: 'Geospatial systems, machine learning, and maps that scale.',

  cv: {
    label: 'View CV',
    href: CV_HREF,
    fileName: CV_DOWNLOAD_NAME,
  },

  nav: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  hero: {
    headline: 'Geodata, models, and interfaces for the real world.',
    subhead:
      'Computer science graduate (Lebanese University): strong in Java, Android, compilers, and AI — now growing a deliberate GeoAI practice (GIS, imagery, and ML pipelines) alongside fullstack web work.',
    primaryCta: { label: 'View work', href: '#projects' },
    secondaryCta: { label: 'View CV', action: 'cv' as const },
  },

  stats: [
    { value: 'M1 · CS', label: 'Lebanese University' },
    { value: 'Java · Android', label: 'Core delivery stack' },
    { value: 'Freelance', label: 'Open for projects' },
  ] satisfies Stat[],

  about: {
    title: 'About',
    paragraphs: [
      'Motivated computer scientist: from first curiosity about how graphical interfaces and systems really work, to shipping software across mobile, desktop, and the web. GeoAI sits on that same thread — rigorous engineering plus models and maps that people can actually use.',
      'Based in Lebanon (Beirut / Tyre). This portfolio is a living site: the structure stays stable while you add map embeds, model write-ups, hosting notes, and new case studies over time.',
    ],
    focus: [
      'Java & Android application development',
      'Web stack: HTML, CSS, JavaScript, TypeScript — plus PHP / ASP.NET where needed',
      'AI, data mining, compilers — extending into geospatial ML & map-ready outputs',
    ],
  },

  skills: [
    {
      title: 'Languages & platforms',
      description: 'Depth where you have shipped the most; breadth across CS coursework.',
      items: [
        'Java',
        'Android (Java)',
        'Python · C# · C++ · C',
        'Matlab · Assembly · Prolog',
      ],
    },
    {
      title: 'Web & services',
      description: 'Full-stack and presentation layers — actively improving modern web skills.',
      items: ['HTML5 · CSS3 · JavaScript', 'PHP', 'ASP.NET', 'APIs & client–server design'],
    },
    {
      title: 'AI, CS & cloud',
      description: 'Theory and tools from degree work and freelance — a bridge to GeoAI.',
      items: [
        'AI & search algorithms',
        'Data mining & analytics',
        'Compiler construction (Flex/Bison, translators)',
        'Cloud computing concepts',
      ],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      title: 'Othello AI game',
      summary:
        'Strategy board game in C# with Unity, including an AI opponent — university project (Apr–Aug 2020).',
      tags: ['C#', 'Unity', 'AI'],
    },
    {
      title: 'Java mail application',
      summary:
        'Client–server mail system designed to transfer messages efficiently and limit junk-mail proliferation.',
      tags: ['Java', 'Networking', 'Security'],
    },
    {
      title: 'SIC — e-commerce mobile app',
      summary:
        'Android sharing platform for non-critical reusable medical devices — individual project (2019–2020).',
      tags: ['Android', 'Java', 'UX'],
    },
    {
      title: 'SCH — e-health app',
      summary: 'E-health mobile application — health-focused Android work alongside your broader app portfolio.',
      tags: ['Android', 'Java', 'Health'],
    },
    {
      title: 'Verger — accounting software',
      summary:
        'Java desktop app for orchard owners: payments, receipts, employees, and market invoices.',
      tags: ['Java', 'Desktop', 'Freelance'],
    },
    {
      title: 'CTVB — compiler / translator',
      summary: 'Compiler course work: language implementation with classic lexer/parser tooling.',
      tags: ['Compilers', 'Flex', 'Bison'],
    },
    {
      title: 'Tcsmp',
      summary: 'Communication protocol project — protocol design and implementation.',
      tags: ['Networking', 'Protocol'],
    },
    {
      title: 'Transport — website',
      summary: 'Web project covering transport-related information and UI.',
      tags: ['Web', 'HTML/CSS'],
    },
    {
      title: 'Urban green space analytics',
      summary:
        'Satellite-driven indices and ML to prioritize planting and heat-risk corridors in dense cities — GeoAI roadmap example.',
      tags: ['EO', 'Python', 'GIS'],
    },
    {
      title: 'Coastal change monitoring',
      summary:
        'Time-series stacks and change detection for shoreline movement — GeoAI roadmap example.',
      tags: ['Remote sensing', 'Deep learning', 'STAC'],
    },
    {
      title: 'Land cover from aerial imagery',
      summary:
        'High-resolution classification with validation and vector-tile export — GeoAI roadmap example.',
      tags: ['Computer vision', 'PostGIS', 'Tiles'],
    },
  ] satisfies Project[],

  contact: {
    title: 'Get in touch',
    blurb:
      'Freelance availability: open. Prefer email or WhatsApp/phone for a fast reply — replace LinkedIn below with your profile URL when ready.',
    /** Shown under the blurb (plain text). */
    location: 'Main Road, Tyre, Lebanon · also Beirut',
    links: [
      {
        label: 'View CV',
        href: CV_HREF,
        kind: 'cv',
      },
      {
        label: 'Email',
        href: 'mailto:Mohamad.Chalhoub@st.ul.edu.lb',
        kind: 'email',
      },
      {
        label: 'Phone',
        href: 'tel:+96176322606',
        kind: 'phone',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/MH-Chalhoub',
        kind: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        kind: 'linkedin',
      },
    ] satisfies SocialLink[],
  },

  footer: {
    quote:
      "Programming isn't about what you know; it's about what you can figure out.",
    quoteAttribution: 'Chris Pine',
  },
} as const
