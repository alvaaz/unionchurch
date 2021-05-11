import React, { useState } from 'react';
import Image from 'next/image';
import { Footer } from '../components/shapes';
import { Duplicate, Check } from '../components/icons';
import Head from 'next/head';
import Link from 'next/link';
import { siteTitle } from '../components/layout';

export default function give() {
  const [copied, setCopied] = useState(false);
  const copyData = () => {
    navigator.clipboard.writeText(
      'Nombre:Corporación Iglesia Union RUT: 70.366.900-K Banco: Santander-Santiago Tipo: Cuenta Corriente Número de cuenta: 63114278 Email: tesoreria@unionchurch.cl'
    );
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 3000);
  };

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
      <nav
        className="w-full pt-10 top-0 text-center bg-pink"
        style={{ zIndex: '1' }}
      >
        <Link href="/">
          <a>
            <Image alt="Logo" src="/logo.png" height="57" width="145" />
          </a>
        </Link>
      </nav>
      <div className="bg-pink">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 md:pt-40 relative ">
          <div className="sm:px-12 md:pb-32">
            <p className="font-sans uppercase text-gray-500 tracking-wider mb-4 font-bold md:text-left">
              Dar
            </p>
            <p className="font-serif text-4xl lg:text-5xl text-gray-800 md:text-left mb-4">
              Gracias por invertir <br />
              en el Reino
            </p>
            <p className="text-gray-500 font-normal text-xl md:w-1/2">
              Tus ofrendas, diezmos y misericordia puedes transferirlos a esta
              cuenta.
            </p>
            <div className="flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:top-20 md:right-12 relative md:absolute">
              <p className="font-bold">Nombre</p>
              <p className="mb-4">Corporación Iglesia Union</p>
              <p className="font-bold">RUT</p>
              <p className="mb-4">70.366.900-K</p>
              <p className="font-bold">Email</p>
              <p className="mb-4">tesoreria@unionchurch.cl</p>
              <p className="font-bold">Banco</p>
              <p className="mb-4">Santander-Santiago</p>
              <p className="font-bold">Tipo</p>
              <p className="mb-4">Cuenta Corriente</p>
              <p className="font-bold">Número de cuenta</p>
              <p className="mb-8">63114278</p>
              <button
                onClick={copyData}
                className={`flex items-center justify-center px-8 py-3 border border-gray-800 text-gray-800 uppercase text-sm tracking-wider font-bold`}
              >
                {copied ? (
                  <Check className="mr-2 h-6 w-6" />
                ) : (
                  <Duplicate className="mr-2" />
                )}
                {copied ? 'Datos copiados 👌' : 'Copiar datos'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 sm:px-0 py-32 text-white">
          <div className="md:pl-12">
            <Image
              src="/logo-white.png"
              width={146}
              height={73}
              alt="logo"
              layout="fixed"
            />
          </div>
          <div className="mt-8 md:mt-0 mb-8 md:mb-0 md:px-12">
            <p className="font-serif text-2xl my-4 font-medium md:mt-0">
              Streaming
            </p>
            <p className="mb-4">
              <span className="font-bold text-lg block">Reunión general</span>{' '}
              Domingos a las 10:45 hrs
            </p>
            <p>
              <span className="font-bold text-lg block">Reunión oración</span>{' '}
              Miércoles a las 19:45 hrs
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <p className="font-serif text-2xl my-4 font-medium md:mt-0">
              Contacto
            </p>
            <p className="mb-4">
              <span className="font-bold text-lg block">Teléfono</span> 32
              2125033
            </p>
            <p>
              <span className="font-bold text-lg block">
                Celular / WhatsApp
              </span>{' '}
              +56 9 6569 6958
            </p>
          </div>
          <div className="md:px-12">
            <p className="font-serif text-2xl my-4 font-medium md:mt-0">
              Ubicación y horario
            </p>
            <p className="mb-4">Von Schroeders #356, Viña del mar, Chile</p>
            <p>
              <span className="font-bold text-lg block">Lunes a Viernes</span>{' '}
              9:00 a 14:00 hrs y 15:00 a 18:00 hrs
            </p>
          </div>
        </div>
        <p className="text-white text-center mb-8">© Union Church 2021</p>
        <div style={{ height: '32px', overflowX: 'hidden' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
