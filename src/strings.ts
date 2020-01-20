export const meta = {
  name: 'Sophie Au',
  siteDescription: 'Homepage of Sophie Au',
  intro: 'Software Developer, Web Designer, Tea Enthusiast',
  blurb: `I truly believe in Dieter Braun's "Less but better". Not just in relation to design but also when it comes to writing software and organisational processes. My number one goal is to delight the customer from day one. Currently, I'm doing this in my role as software engineer at Donut.`,
  copyright: ({ name, date }: { name: string; date: number }) => `© ${name}, ${date}`,
};

export const home = {
  articleSection: 'Articles',
};

export const post = {
  crosspost: ({ hasPrefix }: { hasPrefix: boolean }) =>
    `This is a crosspost from${hasPrefix ? ' the' : ''}`,
  pageTitle: ({ title }: { title: string }) => `${title} | Sophie Au`,
  pageDescription: ({ title }: { title: string }) =>
    `Homepage of Sophie Au | Blogpost about ${title}`,
};

export const config = {
  linkedIn: 'https://www.linkedin.com/in/sophie-au',
  twitter: 'https://twitter.com/SolviAu',
  github: 'https://github.com/SophieAu',
  dribbble: 'https://dribbble.com/solviau',
};

export const TWITTER_URL = '@SolviAu';
export const BASE_URL = 'https://sophieau.com';

export const paths = {
  home: '/',
  articleBase: '/article',
};
