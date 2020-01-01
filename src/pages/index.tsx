import '../styles/Body.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../layouts';
import { home, meta, paths } from '../strings';
import { GraphQLResponse, Post } from '../types';

const Home: React.FC<GraphQLResponse> = ({ data }) => (
  <Layout>
    <section className="mission-statement">
      <p>{meta.blurb}</p>
    </section>
    <BlogSection posts={data.allMarkdownRemark.edges} />
  </Layout>
);

const BlogSection: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <section className="blog-section">
    <h2>{home.articleSection}</h2>
    <ul className="post-list">
      {posts.map(({ node }) => (
        <li key={node.id}>
          <a href={`${paths.articleBase}/${node.frontmatter.slug}`}>
            <span className="post-date">{`${node.frontmatter.date} `}</span>
            {node.frontmatter.title}
          </a>
        </li>
      ))}
    </ul>
  </section>
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
