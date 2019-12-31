import '../styles/Body.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layouts';
import { meta } from '../strings';
import { GraphQLResponse, Post } from '../types';

const Home: React.FC<GraphQLResponse> = ({ data }) => (
  <Layout>
    <div className="mission-statement">
      <p>{meta.blurb}</p>
    </div>
    <BlogSection posts={data.allMarkdownRemark.edges} />
  </Layout>
);

const BlogSection: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className="blog-section">
    <h2>Articles</h2>
    <ul className="post-list">
      {posts.map(({ node }) => (
        <li key={node.id}>
          <a href={'/article/' + node.frontmatter.slug}>
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

export default Home;
