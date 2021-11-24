import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { DocumentRenderer } from '@keystone-next/document-renderer';

const renderers = {
  // Render heading blocks
  block: {
    heading({ level, children, textAlign }) {
      const Comp = `h${level}`;
      return (
        <Comp
          // how to improve this?
          className={`text-${level === 1 ? '' : level}xl font-serif`}
          style={{ textAlign }}
        >
          {children}
        </Comp>
      );
    },
  },
};

export const ARTICLE = gql`
  query($where: PostWhereUniqueInput!) {
    post(where: $where) {
      title
      content {
        document
      }
    }
  }
`;

export default function PostPage({ query }) {
  console.log(query.slug);
  const { data, loading, error } = useQuery(ARTICLE, {
    variables: {
      where: {
        slug: query.slug,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { post } = data;
  return (
    <div>
      <main style={{ margin: '3rem' }}>
        <div>
          <Link href="/">
            <a>&larr; back home</a>
          </Link>
        </div>
        <h1>{post.title}</h1>
        {post.content?.document && (
          <DocumentRenderer
            document={post.content.document}
            renderers={renderers}
          />
        )}
      </main>
    </div>
  );
}

PostPage.propTypes = {
  query: PropTypes.object,
};

renderers.block.heading.propTypes = {
  level: PropTypes.arrayOf[(1, 2, 3, 4, 5, 6)],
  children: PropTypes.children,
  textAlign: PropTypes.arrayOf[('left', 'right', 'center')],
};
