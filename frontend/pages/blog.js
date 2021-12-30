import React, { useState, useEffect } from 'react';
import { Layout, Header2 } from '../components';
import Image from 'next/image';
import gql from 'graphql-tag';
import Link from 'next/link';
import { dateTransform } from '../lib';
import { initializeApollo } from '../lib/apolloClient';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Loading } from '../components/icons/loading';

export const POSTS_COUNT = gql`
  query {
    postsCount
  }
`;

export const ALL_ARTICLES_QUERY = gql`
  query($orderBy: [PostOrderByInput!]!, $take: Int) {
    posts(orderBy: $orderBy, take: $take) {
      id
      title
      slug
      content {
        document
      }
      excerpt
      cover {
        publicUrl
      }
      publishDate
      category {
        name
      }
    }
  }
`;

export const MORE_ARTICLES_QUERY = gql`
  query($orderBy: [PostOrderByInput!]!, $skip: Int) {
    posts(orderBy: $orderBy, skip: $skip) {
      id
      title
      slug
      content {
        document
      }
      excerpt
      cover {
        publicUrl
      }
      publishDate
      category {
        name
      }
    }
  }
`;

export default function blog({ data }) {
  const [posts, setPosts] = useState(data.posts);
  const { data: postsCount } = useQuery(POSTS_COUNT);
  const [loadPosts, { loading, data: newPosts }] = useLazyQuery(
    MORE_ARTICLES_QUERY,
    {
      variables: {
        orderBy: [
          {
            publishDate: 'desc',
          },
        ],
        skip: 3,
      },
    }
  );

  useEffect(() => {
    if (newPosts) {
      setPosts((posts) => [...posts, ...newPosts.posts]);
    }
  }, [newPosts]);

  if (!posts) {
    return <h1>Posts does not exist.</h1>;
  }

  return (
    <Layout title="Blog">
      <Header2 />
      <div className="container mx-auto flex gap-x-8 mb-20">
        <div className="flex-1">
          <div className="text-center">
            <Image alt="Blog" src="/blog.png" height="145" width="180" />
          </div>
          <div className="py-8 flex">
            <div className="h-px bg-gray-200 flex-1"></div>
            <h3 className="text-center relative -top-4 px-4 bg-white font-serif text-xl">
              Últimos artículos
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((article) => {
              return (
                <Link href={`/post/${article.slug}`} key={article.id}>
                  <article className="border-solid border border-gray-100 transition-shadow hover:shadow cursor-pointer">
                    <div className="relative w-full h-60">
                      <Image
                        src={article.cover.publicUrl}
                        alt={`${article.title} cover`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="tracking-wider text-yellow-500 uppercase text-xs">
                        {article.category
                          ? article.category.name
                          : 'no hay categoría'}
                      </span>
                      <h3 className="font-serif text-2xl line-clamp-1">
                        {article.title}
                      </h3>
                      <span className="tracking-wider text-gray-500 uppercase text-xs inline-block mt-3 mb-4">
                        {dateTransform(article.publishDate)}
                      </span>
                      <p className="line-clamp-3">{article.excerpt}</p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </section>
          <div className="text-center pt-20">
            {posts.length < postsCount?.postsCount ? (
              <button
                className="tracking-wider uppercase text-sm inline px-8 py-3 font-bold bg-black hover:bg-gray-900 text-white transition duration-150 ease-in-out"
                onClick={() => loadPosts()}
                disabled={loading}
              >
                {loading ? <Loading /> : 'Cargar más artículos'}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo(null);

  const { data } = await apolloClient.query({
    query: ALL_ARTICLES_QUERY,
    variables: {
      orderBy: [
        {
          publishDate: 'desc',
        },
      ],
      take: 3,
    },
  });

  return {
    props: {
      data,
    },
  };
}
