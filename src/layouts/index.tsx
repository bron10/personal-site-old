import '../styles/main.scss';

import React from 'react';

import { Footer, Header, Sidebar } from '../components/Meta.js';
import SEO from '../components/SEO.js';
import { meta } from '../strings';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <SEO title={meta.name} description={meta.siteDescription} slug="" />
    <div id="root">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
