import React from "react";
import "../styles/Meta.scss";
import { Dribbble, LinkedIn, GitHub } from "./SocialMediaIcons";
import { meta } from "../strings";

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
    <a href="/">
      <h1>{meta.name}</h1>
    </a>
    <p>{meta.intro}</p>
  </header>
);

const SocialMedia = () => (
  <div className="social-media">
    <a href="https://www.linkedin.com/in/sophie-au">
      <LinkedIn />
    </a>
    <a href="https://github.com/SophieAu">
      <GitHub />
    </a>
    <a href="https://dribbble.com/solviau">
      <Dribbble />
    </a>
  </div>
);

const Copyright = () => (
  <p className="copyright">
    © {meta.name}, {new Date().getFullYear()}
  </p>
);

export const Footer = () => (
  <footer>
    <SocialMedia />
    <Copyright />
  </footer>
);
