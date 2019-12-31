// ---
// Post GraphQL Response

export type Post = {
  node: {
    id: number;
    frontmatter: PostFrontmatter;
    excerpt: string;
  };
};

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: {
      edges: Post[];
    };
  };
};

export type SingleGraphQLResponse = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: PostFrontmatter;
    };
  };
};

export type PostFrontmatter = {
  title: string;
  date: string;
  slug: string;
  crosspost?: Crosspost;
};

type Crosspost = {
  site: string;
  url: string;
  hasPrefix: boolean;
};
