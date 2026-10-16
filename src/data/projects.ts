// Single source for project cards, case study pages and search.
export type Item = {
  slug: string;
  href: string;
  title: string;
  short: string; // tile label
  kind: 'Project' | 'Playground';
  category: 'Startup' | 'Client work' | 'Competition' | 'Creative content' | 'Vibe coding';
  sub: string; // what the work was, shown next to the category
  color: string; // CSS var prefix, e.g. 'lyft' -> --lyft, --lyft-tint, --lyft-text
  face: 1 | 2 | 3 | 4 | 5 | 6; // legacy ordering id
  summary: string; // may contain <strong> for key words
  role: string;
  tags: string[];
  cover: string;
  stats: [string, string][]; // headline numbers
};

export const items: Item[] = [
  {
    slug: 'lyft',
    href: '/projects/lyft',
    title: 'Lyft Explore',
    short: 'Lyft Explore',
    kind: 'Project',
    category: 'Competition',
    sub: 'Class case competition',
    color: 'lyft',
    face: 1,
    summary: 'A <strong>feature concept</strong> that turns every bike ride into a city adventure, built on <strong>infrastructure Lyft already owns</strong>.',
    role: 'Ideation lead, slide design, all mockups',
    tags: ['UX', 'Gamification', 'Strategy'],
    cover: '/images/lyft/hero.webp',
    stats: [['Projected ROI', '720%'], ['Profit margin', '87.7%'], ['5-yr profit', '$213M → $317M']],
  },
  {
    slug: 'releaf',
    href: '/projects/releaf',
    title: 'ReLeaf Candles',
    short: 'ReLeaf Candles',
    kind: 'Project',
    category: 'Startup',
    sub: 'Founder',
    color: 'releaf',
    face: 2,
    summary: 'The <strong>startup I founded</strong>: a candle jar that <strong>twists open into a planter</strong> once the candle burns out.',
    role: 'Founder + CEO',
    tags: ['Product', 'Brand', 'Startup'],
    cover: '/images/releaf/cover.webp',
    stats: [['Skandalaris Venture Comp.', 'Top 16 of 131'], ['Survey responses', '146'], ['Customers', '26']],
  },
  {
    slug: 'skate-for-girls',
    href: '/projects/skate-for-girls',
    title: 'SKATE for Girls × WashUX',
    short: 'SKATE for Girls',
    kind: 'Project',
    category: 'Client work',
    sub: 'UX consulting',
    color: 'skate',
    face: 3,
    summary: 'A <strong>UX consulting</strong> redesign for a nonprofit, built to ship on their <strong>existing Wix site</strong>.',
    role: 'Homepage design lead + UX research',
    tags: ['UX research', 'Web design', 'Nonprofit'],
    cover: '/images/skate/cover.webp',
    stats: [['Survey responses', '38'], ["Couldn't find Donate", '45%'], ['Deliverable', 'Prototype']],
  },
  {
    slug: 'circular-stl',
    href: '/projects/circular-stl',
    title: 'Circular STL: #AroundSTL',
    short: 'Circular STL',
    kind: 'Project',
    category: 'Client work',
    sub: 'Marketing',
    color: 'stl',
    face: 4,
    summary: 'A <strong>social campaign</strong> and <strong>effectiveness study</strong> for St. Louis’s proposed Circularity District.',
    role: 'Campaign strategy, design + research',
    tags: ['Marketing', 'Research', 'Social'],
    cover: '/images/stl/cover.webp',
    stats: [['Favorability', '4.15 / 5'], ['Tagline landed', '~80%'], ['Respondents', '31']],
  },
  {
    slug: 'social',
    href: '/projects/social',
    title: 'Social Media',
    short: 'Social Media',
    kind: 'Project',
    category: 'Creative content',
    sub: 'Social media',
    color: 'design',
    face: 5,
    summary: '<strong>Reels</strong>, recap videos and posts for <strong>WUTV</strong> and the <strong>Skandalaris Center</strong>.',
    role: 'Content creator',
    tags: ['Social', 'Reels', 'Video'],
    cover: '/images/design/hero-reels.webp',
    stats: [['Avg. post views', '1,000+'], ['WUTV members', '3 → 20'], ['Creating content', '4+ yrs']],
  },
  {
    slug: 'design',
    href: '/projects/design',
    title: 'Design',
    short: 'Design',
    kind: 'Project',
    category: 'Creative content',
    sub: 'Graphic design',
    color: 'design',
    face: 6,
    summary: '<strong>Posters</strong>, a <strong>banner</strong> and a <strong>print</strong> for WUTV, the Skandalaris Center and more.',
    role: 'Graphic designer',
    tags: ['Posters', 'Graphic design', 'Print'],
    cover: '/images/design/playground.webp',
    stats: [['Posters', '4'], ['Banners', '1'], ['Prints', '1']],
  },
  {
    slug: 'motifme',
    href: '/playground/motifme',
    title: 'MotifMe',
    short: 'MotifMe',
    kind: 'Playground',
    category: 'Vibe coding',
    sub: 'Product design',
    color: 'motif',
    face: 2,
    summary: 'A <strong>motif and print studio</strong> for fashion designers, built in one session by <strong>vibe coding with Claude</strong>.',
    role: 'Product designer + creative director',
    tags: ['Vibe coding', 'Fashion', 'Product'],
    cover: '/images/playground/motifme/01-home-dashboard.png',
    stats: [['Timeline', 'One session'], ['Tools', 'Claude, GitHub, Vercel']],
  },
  {
    slug: 'lock-in',
    href: '/playground/lock-in',
    title: 'Lock In',
    short: 'Lock In',
    kind: 'Playground',
    category: 'Vibe coding',
    sub: 'Product design',
    color: 'lockin',
    face: 1,
    summary: 'A study app that turns your classes into <strong>15-minute exam games</strong>. I designed it and built it by <strong>directing AI</strong>.',
    role: 'Product idea, UX + UI design, prompt writing, AI direction',
    tags: ['UX', 'AI', 'Product'],
    cover: '/images/lockin/desk-06-today.webp',
    stats: [['Timeline', '2 days'], ['Bugs fixed', '7'], ['WCAG AA issues', '0']],
  },
];

export const projects = items.filter((i) => i.kind === 'Project');
export const categories = ['Startup', 'Client work', 'Competition', 'Creative content'] as const;
export const playground = items.filter((i) => i.kind === 'Playground');

export function nextItem(slug: string) {
  const i = items.findIndex((p) => p.slug === slug);
  return items[(i + 1) % items.length];
}
