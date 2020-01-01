import '../styles/Meta.scss';

import React from 'react';

import { config, meta, paths } from '../strings';
import { Dribbble, GitHub, LinkedIn, Twitter } from './SocialMediaIcons';

export const Sidebar = () => (
  <div id="sidebar">
    <div id="sidebar-content">
      <Header />
      <SocialMedia />
    </div>
    <Copyright />
  </div>
);

export const Header = () => (
  <header>
    <a href={paths.home}>
      <h1>{meta.name}</h1>
    </a>
    <p>{meta.intro}</p>
  </header>
);

export const Footer = () => (
  <footer>
    <SocialMedia />
    <Copyright />
  </footer>
);

// TODO: MAKE LIST
const SocialMedia = () => (
  <div className="social-media">
    <a href={config.linkedIn}>
      <LinkedIn />
    </a>
    <a href={config.twitter}>
      <Twitter />
    </a>
    <a href={config.github}>
      <GitHub />
    </a>
    <a href={config.dribbble}>
      <Dribbble />
    </a>
  </div>
);

const Copyright = () => (
  <p className="copyright">{meta.copyright({ name: meta.name, date: new Date().getFullYear() })}</p>
);
