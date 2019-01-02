import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer, Sidebar } from "../components/Meta.js";
import "../styles/main.scss";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Sophie Au</title>
      <meta name="description" content="Homepage of Sophie Au" />
    </Helmet>
    <div id="root">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
