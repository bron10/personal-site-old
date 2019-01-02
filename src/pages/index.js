import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import "../styles/Body.scss";

export default ({ data }) => (
  <Layout>
    <MissionStatement />
    <BlogSection posts={data.allMarkdownRemark.edges} />
  </Layout>
);

const MissionStatement = () => (
  <div className="mission-statement">
    <p>
      I truly believe in Dieter Braun's "Less but better". Not just in relation
      to design but also when it comes to writing software and organisational
      processes. My number one goal is to delight the customer from day one.
      Currently, I'm doing this in my role as software developer and consultant
      at <a href="https://www.thoughtworks.com/">ThoughtWorks</a>.
    </p>
  </div>
);

const BlogSection = ({ posts }) => (
  <div className="blog-section">
    <h2>Articles</h2>
    <ul className="post-list">
      {posts.map(({ node }) => (
        <li key={node.id}>
          <a href={"/article/" + node.frontmatter.slug}>
            <span className="post-date">{node.frontmatter.date} </span>
            {node.frontmatter.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  }
`;
