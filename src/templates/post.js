import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "prismjs/themes/prism-tomorrow.css";
import Layout from "../layouts";
import "../styles/Article.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | Sophie Au</title>
        <meta
          name="description"
          content={
            "Homepage of Sophie Au | Blogpost about " + post.frontmatter.title
          }
        />
      </Helmet>
      <div className="article">
        <h1>{post.frontmatter.title}</h1>
        <p className="date">{post.frontmatter.date}</p>
        <div className="body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        slug
      }
    }
  }
`;
