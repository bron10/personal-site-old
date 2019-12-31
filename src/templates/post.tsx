import 'prismjs/themes/prism-tomorrow.css';
import '../styles/Article.scss';

import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../layouts';
import { post } from '../strings';
import { PostFrontmatter, SingleGraphQLResponse } from '../types';

const Post: React.FC<SingleGraphQLResponse> = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <HelmetData postTitle={post.frontmatter.title} />
    <div id="article">
      <Frontmatter {...post.frontmatter} />
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </div>
  </Layout>
);

const HelmetData: React.FC<{ postTitle: string }> = ({ postTitle }) => (
  <Helmet>
    <title>{postTitle} | Sophie Au</title>
    <meta name="description" content={'Homepage of Sophie Au | Blogpost about ' + postTitle} />
  </Helmet>
);

const Frontmatter: React.FC<PostFrontmatter> = ({ title, date, crosspost }) => (
  <>
    <h1>{title}</h1>
    <p className="date">{date}</p>
    {!!crosspost && (
      <div className="crosspost">
        {`${post.crosspost} ${crosspost.hasPrefix && post.prefix} `}
        <a href={crosspost.url}>{crosspost.site}</a>
        {`.`}
      </div>
    )}
  </>
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
