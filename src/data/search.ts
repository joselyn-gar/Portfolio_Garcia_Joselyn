import { items } from './projects';
import { site } from './site';

export type Entry = {
  title: string;
  href?: string;
  group: 'Work' | 'Pages' | 'Quick answers';
  keywords: string;
  answer?: string;
};

const strip = (s: string) => s.replace(/<[^>]+>/g, '');

const work: Entry[] = items.map((i) => ({
  title: i.title,
  href: i.href,
  group: 'Work',
  keywords: [i.short, strip(i.summary), i.role, ...i.tags, i.kind].join(' '),
  answer: strip(i.summary),
}));

const pages: Entry[] = [
  { title: 'About me', href: '/about', group: 'Pages', keywords: 'about bio who story strengths clifton hobbies' },
  { title: 'All projects', href: '/projects', group: 'Pages', keywords: 'projects case studies work portfolio' },
  { title: 'Playground', href: '/playground', group: 'Pages', keywords: 'playground creative side fun textiles posters reels' },
];
pages.push({ title: 'Resume', href: '/resume', group: 'Pages', keywords: 'resume cv experience pdf' });

const answers: Entry[] = [
  {
    title: 'How do I get in touch?',
    href: `mailto:${site.email}`,
    group: 'Quick answers',
    keywords: 'contact email reach hire linkedin touch',
    answer: `Email me at ${site.email}, or find me on LinkedIn.`,
  },
  {
    title: 'What tools do you use?',
    href: '/about#toolbox',
    group: 'Quick answers',
    keywords: 'tools software figma framer canva excel illustrator blender procreate claude photoshop capcut stack',
    answer: 'Figma, Framer, Canva, Adobe Illustrator + Photoshop, Blender, Procreate, Excel, CapCut, Claude, and Google AI Studio.',
  },
  {
    title: 'Show me UX work',
    href: '/projects/skate-for-girls',
    group: 'Quick answers',
    keywords: 'ux ui user research usability interviews wireframes prototype hci design',
    answer: 'Start with SKATE for Girls (research → wireframes → prototype), then Lyft Explore (feature concept + UI).',
  },
  {
    title: 'Show me marketing work',
    href: '/projects/circular-stl',
    group: 'Quick answers',
    keywords: 'marketing campaign social advertising brand strategy go-to-market survey',
    answer: 'Circular STL is a full campaign + effectiveness study. Lyft Explore includes a go-to-market campaign.',
  },
  {
    title: 'AI + vibe coding',
    href: '/projects/lock-in',
    group: 'Quick answers',
    keywords: 'ai vibe coding google ai studio prompt app study canvas gamification handshake lock in',
    answer: 'Lock In is a study app I vibe-coded in Google AI Studio. It turns Canvas courses into exam-prep games.',
  },
  {
    title: 'What are you studying?',
    href: '/about',
    group: 'Quick answers',
    keywords: 'school washu major minor study student year education',
    answer: 'Marketing and Entrepreneurship at WashU, with a minor in Human-Computer Interaction.',
  },
  {
    title: 'Fun facts',
    href: '/about#away',
    group: 'Quick answers',
    keywords: 'fun facts hobbies dodgers baseball jazz video production agriculture board games',
    answer: 'Dodgers fan, jazz lover, video producer, curious about agriculture operations, and a board game lover (hence the dice).',
  },
  {
    title: 'How did you build this site?',
    href: '/about#site',
    group: 'Quick answers',
    keywords: 'build site code how made developed',
    answer: 'It’s built like a board game, because I love them. The little dog following your cursor can be switched off in the footer.',
  },
];

export const searchIndex: Entry[] = [...answers, ...work, ...pages];
