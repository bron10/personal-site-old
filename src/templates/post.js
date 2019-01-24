import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "prismjs/themes/prism-tomorrow.css";
import Layout from "../layouts";
import "../styles/Article.scss";

export default ({ data: { markdownRemark: post } }) => (
  <Layout>
    <HelmetData postTitle={post.frontmatter.title} />
    <div className="article">
      <Frontmatter frontmatter={post.frontmatter} />
      <PostBody body={post.html} />
      <hr />
    </div>
  </Layout>
);

const HelmetData = ({ postTitle }) => (
  <Helmet>
    <title>{postTitle} | Sophie Au</title>
    <meta
      name="description"
      content={"Homepage of Sophie Au | Blogpost about " + postTitle}
    />
  </Helmet>
);

const Frontmatter = ({ frontmatter }) => (
  <>
    <h1>{frontmatter.title}</h1>
    <p className="date">{frontmatter.date}</p>
    {!!frontmatter.crosspost && (
      <Crosspost
        url={frontmatter.crosspost.url}
        site={frontmatter.crosspost.site}
        prefix={!!frontmatter.crosspost.prefix}
      />
    )}
  </>
);

const Crosspost = ({ site, url, prefix }) => (
  <div className="crosspost">
    This is a crosspost from {prefix && "the "}
    <a href={url}>{site}</a>.
  </div>
);

const PostBody = ({ body }) => (
  <div className="post-body" dangerouslySetInnerHTML={{ __html: body }} />
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        slug
        crosspost {
          site
          url
          prefix
        }
      }
    }
  }
`;
