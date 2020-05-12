export const meta = {
  name: 'Bruno Dmello',
  siteDescription: 'Homepage of Bruno Dmello',
  intro: 'Web Dev, Fullstack forever',
  blurb: `Architect for quality, Build to sustain, Fail fast and Repeat to Learn`,
  copyright: ({ name, date }: { name: string; date: number }) => `powered by ® webvictory`,
};

export const home = {
  articleSection: 'Articles',
};

export const post = {
  crosspost: ({ hasPrefix }: { hasPrefix: boolean }) =>
    `This is a crosspost from${hasPrefix ? ' the' : ''}`,
  pageTitle: ({ title }: { title: string }) => `${title} | Bruno Dmello`,
  pageDescription: ({ title }: { title: string }) =>
    `Homepage of Bruno Dmello | Blogpost about ${title}`,
};

export const config = {
  linkedIn: 'https://www.linkedin.com/in/bruno-dmello',
  twitter: 'https://twitter.com/bruno_dmello',
  github: 'https://github.com/bron10'
};

export const TWITTER_URL = '@bruno_dmello';
export const BASE_URL = 'http://placeholder.com';

export const paths = {
  home: '/',
  articleBase: '/article',
};
