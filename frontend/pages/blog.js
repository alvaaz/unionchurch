import React from 'react';
import { Layout, Header2 } from '../components';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const ALL_ARTICLES_QUERY = gql`
  query {
    posts {
      id
      title
      content {
        document
      }
    }
  }
`;

export default function blog() {
  const { data, error, loading } = useQuery(ALL_ARTICLES_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Layout title="Nosotros">
      <Header2 />
      <div className="container mx-auto flex gap-x-8">
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
          <section className="grid gallery gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              return (
                <article
                  key={n}
                  className="border-solid border border-gray-100 transition-shadow hover:shadow cursor-pointer"
                >
                  <img
                    className="w-full"
                    src="https://cdn.stocksnap.io/img-thumbs/280h/autumn-leaves_FDXN0MENSV.jpg"
                    alt=""
                  />
                  <div className="p-5">
                    <span className="tracking-wider text-yellow-500 uppercase text-xs">
                      Devocionales
                    </span>
                    <h3 className="font-serif text-2xl">La puerta</h3>
                    <span className="tracking-wider text-gray-500 uppercase text-xs inline-block mt-3 mb-4">
                      10 octubre
                    </span>
                    <p>
                      ¡Atención señor! , dice el famoso locutor de TV a un
                      nervioso participante. Frente a Ud.
                    </p>
                  </div>
                </article>
              );
            })}
          </section>
        </div>

        <aside className="w-80 pt-8">
          <div className="flex flex-col gap-y-5 mb-8">
            <div className="bg-pink-light font-serif text-xl w-full text-center py-3">
              <p>Continua leyendo</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
              <img
                className="w-20 h-20 mr-4"
                src="https://cdn.stocksnap.io/img-thumbs/280h/autumn-leaves_FDXN0MENSV.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="mb-2 text-lg">La carrera</p>
                <span className="tracking-wider text-gray-500 uppercase text-xs inline-block">
                  10 octubre
                </span>
              </div>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
              <img
                className="w-20 h-20 mr-4"
                src="https://cdn.stocksnap.io/img-thumbs/280h/autumn-leaves_FDXN0MENSV.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="mb-2 text-lg">La carrera</p>
                <span className="tracking-wider text-gray-500 uppercase text-xs inline-block">
                  10 octubre
                </span>
              </div>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
              <img
                className="w-20 h-20 mr-4"
                src="https://cdn.stocksnap.io/img-thumbs/280h/autumn-leaves_FDXN0MENSV.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="mb-2 text-lg">La carrera</p>
                <span className="tracking-wider text-gray-500 uppercase text-xs inline-block">
                  10 octubre
                </span>
              </div>
            </div>
          </div>
          <div className="bg-pink-light font-serif text-xl w-full text-center py-3">
            <p>Categorías</p>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
