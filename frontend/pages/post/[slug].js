import gql from 'graphql-tag';
import { Layout, Header2 } from '../../components';
import PropTypes from 'prop-types';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import Image from 'next/image';
import { dateTransform } from '../../lib';
import { initializeApollo } from '../../lib/apolloClient';

const renderers = {
  // Render heading blocks
  block: {
    heading({ level, children, textAlign }) {
      const Comp = `h${level}`;
      return (
        <Comp
          // how to improve this?
          className={`text-${level === 1 ? '' : level}xl font-sans`}
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

export default function PostPage({ data }) {
  if (!data.post) {
    return <h1>Post does not exist.</h1>;
  }
  return (
    <Layout title={data.post.title}>
      <Header2 className="bg-pink-light" />
      <div className="text-center bg-pink-light w-full pt-8 pb-40 mb-48">
        <Image
          alt="Blog"
          src="/blog.png"
          height="100"
          width="180"
          objectFit="contain"
        />
      </div>
      <div
        className="container mx-auto px-8 w-3/4 max-w-4xl relative"
        style={{
          top: '-320px',
        }}
      >
        <div className="flex justify-center relative mb-12">
          <div>
            <Image
              src={data.post.cover.publicUrl}
              width={1000}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
        <p className="tracking-wider text-yellow-500 uppercase text-xs text-center mb-4">
          {data.post.category.name}
        </p>

        <h1 className="font-serif text-5xl text-center mb-8">
          {data.post.title}
        </h1>
        <p className="flex items-center font-sans justify-center gap-4 mb-20">
          <Image
            height={40}
            width={40}
            className="rounded-full"
            src="/images/horaciopatty.png"
            objectFit="cover"
          ></Image>
          <span>
            {data.post.author ? data.post.author.name : 'No tiene autor'}
          </span>
          <span className="text-gray-500	">
            {dateTransform(data.post.publishDate)}
          </span>
        </p>
        <div className="blog">
          {data.post.content?.document && (
            <DocumentRenderer
              document={data.post.content.document}
              renderers={renderers}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

PostPage.propTypes = {
  data: PropTypes.object,
};

renderers.block.heading.propTypes = {
  level: PropTypes.arrayOf[(1, 2, 3, 4, 5, 6)],
  children: PropTypes.children,
  textAlign: PropTypes.arrayOf[('left', 'right', 'center')],
};

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo(null);
  const { data } = await apolloClient.query({
    query: ARTICLE,
    variables: {
      where: {
        slug: params.slug,
      },
    },
  });

  return {
    props: {
      data,
    },
  };
}
