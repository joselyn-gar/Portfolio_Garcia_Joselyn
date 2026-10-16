import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joselyngarcia.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // old URLs from before the Projects / Playground split
  redirects: {
    '/projects/lock-in': '/playground/lock-in',
    '/playground/design-social': '/projects/social',
    '/playground/textiles': '/projects/design',
  },
});
