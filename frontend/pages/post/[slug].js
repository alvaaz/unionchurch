import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import Image from 'next/image';
import { dateTransform } from '../../lib';

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
      cover {
        publicUrl
      }
      category {
        name
        id
      }
      publishDate
      author {
        name
        image {
          publicUrl
        }
      }
    }
  }
`;

export default function PostPage({ query }) {
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
    <main style={{ margin: '3rem' }} className="container mx-auto px-8">
      <div className="w-full border-gray w-4/5 h-80	relative border border-indigo-600">
        <Image src={post.cover.publicUrl} layout="fill" objectFit="cover" />
      </div>
      <Link href={`/category/${post.category.id}`}>{post.category.name}</Link>
      <h1 className="font-serif text-5xl text-center">{post.title}</h1>
      <p className="flex items-center font-sans justify-center">
        <Image
          height={40}
          width={40}
          className="rounded-full"
          src={post.author.image.publicUrl}
        ></Image>
        <span>{post.author ? post.author.name : 'No tiene autor'}</span>
        <span>{dateTransform(post.publishDate)}</span>
      </p>
      {post.content?.document && (
        <DocumentRenderer
          document={post.content.document}
          renderers={renderers}
        />
      )}
    </main>
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
