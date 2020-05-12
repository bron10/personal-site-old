import '../styles/Meta.scss';

import React from 'react';

import { config, meta, paths } from '../strings';
import {  GitHub, LinkedIn, Twitter } from './SocialMediaIcons';

export const Sidebar = () => (
  <header id="sidebar">
    <div id="sidebar-content">
      <Header />
      <SocialMedia />
    </div>
    <Copyright />
  </header>
);

export const Header = () => (
  <header className="header">
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

const SocialMedia = () => (
  <ul className="social-media">
    <li>
      <a href={config.linkedIn}>
        <LinkedIn />
      </a>
    </li>
    <li>
      <a href={config.twitter}>
        <Twitter />
      </a>
    </li>
    <li>
      <a href={config.github}>
        <GitHub />
      </a>
    </li>
  </ul>
);

const Copyright = () => (
  <p className="copyright">{meta.copyright({ name: meta.name, date: new Date().getFullYear() })}</p>
);
