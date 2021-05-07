import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { siteTitle } from '../components/layout';
import { Separator, Adn, Vision, Mision } from '../components/shapes';
import { Facebook, Youtube, Instagram } from '../components/icons';

// eslint-disable-next-line react/prop-types
export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen">
        <Image
          className="absolute object-cover back"
          alt="Cover"
          src="/images/cover.png"
          layout="fill"
        />

        <nav
          className="container mx-auto pt-10 flex relative"
          style={{ zIndex: '1' }}
        >
          <Link href="/">
            <a>
              <Image alt="Logo" src="/logo.png" height="57" width="145" />
            </a>
          </Link>
        </nav>
        <div className="absolute w-full top-0 h-screen flex justify-center content-center items-center">
          <div>
            <p
              className="text-center text-white m-0 font-serif text-8xl mb-20"
              style={{ textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Bienvenido a casa
            </p>
            <div className="mb-40 flex justify-center">
              <a
                href="google.cl"
                className="tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary text-white mr-8"
              >
                Ver
              </a>
              <a
                href="google.cl"
                className="tracking-wider uppercase font-bold text-sm inline px-8 py-3 border-white font-bold bg-transparent text-white border"
              >
                Dar
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/unionchurch.cl"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="mr-8" />
              </a>
              <a
                href="https://www.instagram.com/unionchurch.cl/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="mr-8" />
              </a>
              <a
                href="https://www.youtube.com/c/UnionChurchcl"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-20 text-center">
          <Separator className="block mx-auto" />
          <p className="font-sans uppercase text-gray-500 tracking-wider mt-4 mb-4">
            Nosotros
          </p>
          <p className="font-serif text-4xl text-gray-800 mb-16">
            En esto creemos
          </p>
          <div className="flex justify-between px-16 text-left">
            <div className="flex-1 px-12">
              <Mision className="mb-8" />
              <p className="text-2xl text-gray-800 mb-4">Misión</p>
              <p className="text-gray-500 font-normal">
                Conocer, llegar a ser, e impactar como Jesús
              </p>
            </div>
            <div className="flex-1 px-12">
              <Vision className="mb-8" />
              <p className="text-2xl text-gray-800 mb-4">Visión</p>
              <p className="text-gray-500 font-normal">
                Transformar la ciudad, influenciar al mundo, ayudar a las
                personas a conocer, amar y compartir a Jesús.
              </p>
            </div>
            <div className="flex-1 px-12">
              <Adn className="mb-8" />
              <p className="text-2xl text-gray-800 mb-4">ADN</p>
              <p className="text-gray-500 font-normal">
                Vemos y anhelamos ser una iglesia que ama a Jesús y a las
                personas.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-40 text-center relative pb-20 mb-40">
          <div
            className="absolute l-0 t-0 w-full h-full -left-1/4"
            style={{ zIndex: '-1', backgroundColor: '#FACFB0' }}
          ></div>
          <div className="py-16">
            <Separator className="block mx-auto" />
            <p className="font-sans uppercase text-gray-500 tracking-wider mt-4 mb-4">
              Servicios
            </p>
            <p className="font-serif text-4xl text-gray-800 mb-8">
              Últimos servicios
            </p>
            <p className="text-gray-500 font-normal mb-16">
              Participa junto a nosotros en los eventos que cambiarán tu vida.
              Incribete y partícipa.
            </p>
            <div className="flex justify-between px-16 text-left">
              {/* eslint-disable-next-line react/prop-types */}
              {data.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { standard } = thumbnails;
                const regexDate = /\w[^-]*$/;
                const regexTitle = /"(.*?)"/;
                const name = regexTitle.exec(title);
                const date = regexDate.exec(title);
                return (
                  <a
                    key={id}
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex-1 px-12">
                      <Image
                        width={standard.width}
                        height={standard.height}
                        src={standard.url}
                        alt=""
                      />
                      <p className="my-4 uppercase text-sm tracking-wider font-bold text-gray-700">
                        {date[0]}
                      </p>
                      <p className="text-2xl text-gray-800 mb-4 font-medium">
                        {name[0]}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <a
            href="google.cl"
            className="inline px-8 py-3 border border-primary bg-primary text-white mr-8 uppercase text-sm tracking-wider font-bold"
          >
            Ir al canal de Youtube
          </a>
        </div>
      </div>
    </>
  );
}

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=3&playlistId=PLV_Ax0JpimXPtD-QDqcygoAwERU0rvU82&key=AIzaSyDMLPX3Q56QXbxcGbfIlsKDU5HyOtCIwsM`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
