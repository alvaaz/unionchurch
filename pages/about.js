import React from 'react';
import Image from 'next/image';
import { Adn, Vision } from '../components/shapes';
import { Heart } from '../components/icons';
import Link from 'next/link';
import Layout from '../components/layout';
import { attributes } from '../data';

export default function about() {
  const attributesRender = attributes.map((group, index) => {
    return (
      <div className="flex space-y-4 flex-col" key={index}>
        {group.map((quote, index) => {
          return (
            <div key={index} className="flex bg-black bg-opacity-10 p-4 ">
              <Heart className="mr-4" />
              <p className="font-xl text-white mb-2">{quote}</p>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <Layout>
      <nav className="px-8 md:px-0 pt-10 top-0 bg-pink" style={{ zIndex: '1' }}>
        <div className="container mx-auto sm:px-12">
          <Link href="/">
            <a>
              <Image alt="Logo" src="/logo.png" height="57" width="145" />
            </a>
          </Link>
        </div>
      </nav>

      <div className="bg-pink pt-20">
        <div className="container mx-auto flex flex-col md:flex-row pb-16 md:pb-24">
          <div className="w-full md:w-1/2 text-center md:text-left mb-16 md:mb-0">
            <p className="font-serif text-4xl lg:text-5xl text-gray-800 md:text-left mb-20">
              Nosotros
            </p>
            <div className="mb-16">
              <Adn className="mb-8 mx-auto md:mx-0" />
              <p className="text-xl text-gray-800 mb-2 font-medium mb-4">
                Misión
              </p>
              <p className="text-lg text-gray-600">
                Conocer, llegar a ser, e impactar como Jesús
              </p>
            </div>
            <div>
              <Vision className="mb-8 mx-auto md:mx-0" />
              <p className="text-xl text-gray-800 mb-2 font-medium mb-4">
                Visión
              </p>
              <p className="text-lg text-gray-600">
                Transformar la ciudad, influenciar al mundo, ayudar a las
                personas a conocer, amar y compartir a Jesús.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/zoom.png"
              alt="Zoom"
              layout="responsive"
              height={534}
              width={641}
            ></Image>
          </div>
        </div>
      </div>
      <div className="bg-oil pt-20 pb-20">
        <div className="container mx-auto w-full px-8 md:px-0">
          <p className="font-serif text-4xl lg:text-5xl text-white mb-8 text-center">
            Vemos y anhelamos ser una Iglesia
          </p>
          <p className="font-xl text-white mb-16 text-center">
            Transformar la ciudad, influenciar al mundo, ayudar a las personas a
            conocer, amar y compartir a Jesús.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center">
            {attributesRender}
          </div>
        </div>
      </div>
    </Layout>
  );
}
