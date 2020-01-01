import 'prismjs/themes/prism-tomorrow.css';
import '../styles/Article.scss';

import { graphql } from 'gatsby';
import React from 'react';

import SEO from '../components/SEO';
import Layout from '../layouts';
import { post as string } from '../strings';
import { SingleGraphQLResponse } from '../types';

const Post: React.FC<SingleGraphQLResponse> = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO
      title={string.pageTitle({ title: post.frontmatter.title })}
      description={string.pageDescription({ title: post.frontmatter.title })}
      slug={post.frontmatter.slug}
    />
    <article id="article">
      <h1>{post.frontmatter.title}</h1>
      <p className="date">{post.frontmatter.date}</p>
      {!!post.frontmatter.crosspost && (
        <p className="crosspost">
          {`${string.crosspost({ hasPrefix: post.frontmatter.crosspost.hasPrefix })} `}
          <a href={post.frontmatter.crosspost.url}>{post.frontmatter.crosspost.site}</a>
        </p>
      )}
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </article>
  </Layout>
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
          hasPrefix
        }
      }
    }
  }
`;

export default Post;
