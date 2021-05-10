import React, { useReducer } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { siteTitle } from '../components/layout';
import { Separator, Adn, Vision, Mision, Footer } from '../components/shapes';
import { Facebook, Youtube, Instagram, Error } from '../components/icons';
import { reducer, initialState, actions } from '../lib/reducer';

// eslint-disable-next-line react/prop-types
export default function Home({ data }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    email,
    firstname,
    lastname,
    canISend,
    isLoading,
    successMessage,
    firstnameError,
    lastnameError,
    emailError,
    error,
  } = state;

  const handleChange = (e) => {
    dispatch({
      type: actions.fieldsChanged,
      fieldName: e.currentTarget.name,
      payload: e.currentTarget.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.formSubmitted });
    try {
      if (canISend) {
        await axios.post('api/newsletter', { email, firstname, lastname });
        dispatch({ type: actions.submitSuccess, payload: 'Agregado' });
      } else {
        dispatch({
          type: actions.submitError,
          payload: 'Agrega todos los campos solicitados',
        });
      }
    } catch (e) {
      dispatch({ type: actions.submitError, payload: e.response.data.error });
    }
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
      <div className="h-screen">
        <Image
          className="absolute object-cover back"
          alt="Cover"
          src="/images/cover.png"
          layout="fill"
        />

        <nav
          className="w-full pt-10 absolute top-0 text-center"
          style={{ zIndex: '1' }}
        >
          <Link href="/">
            <a>
              <Image alt="Logo" src="/logo.png" height="57" width="145" />
            </a>
          </Link>
        </nav>
        <div className="h-full flex justify-center items-center relative">
          <div>
            <p
              className="text-center text-white font-serif text-5xl mb-20 md:text-6xl lg:text-8xl"
              style={{ textShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Bienvenido a casa
            </p>
            <div className="mb-24 flex justify-center">
              <a
                href="https://www.youtube.com/c/UnionChurchcl"
                className="tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary hover:bg-primary-dark text-white mr-8 transition duration-150 ease-in-out"
              >
                Ver
              </a>
              <a
                href="google.cl"
                className="tracking-wider uppercase font-bold text-sm inline px-8 py-3 border-white font-bold bg-transparent text-white border bg-white bg-opacity-10 hover:bg-opacity-30 transition duration-150 ease-in-out"
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
          <p className="font-sans uppercase text-gray-500 tracking-wider mt-4 mb-4 font-bold">
            Nosotros
          </p>
          <p className="font-serif text-4xl text-gray-800 mb-16">
            En esto creemos
          </p>
          <div className="flex justify-between text-left flex-col md:flex-row">
            <div className="flex-1 px-8 md:px-12 mb-16 lg:mb-0 text-center md:text-left">
              <Mision className="mb-8 block mx-auto md:mx-0" />
              <p className="text-2xl text-gray-800 mb-4 font-bold">Misión</p>
              <p className="text-gray-500 font-normal text-xl">
                Conocer, llegar a ser, e impactar como Jesús
              </p>
            </div>
            <div className="flex-1 px-8 md:px-12 mb-16 lg:mb-0 text-center md:text-left">
              <Vision className="mb-8 block mx-auto md:mx-0" />
              <p className="text-2xl text-gray-800 mb-4 font-bold">Visión</p>
              <p className="text-gray-500 font-normal text-xl">
                Transformar la ciudad, influenciar al mundo, ayudar a las
                personas a conocer, amar y compartir a Jesús.
              </p>
            </div>
            <div className="flex-1 px-8 md:px-12 text-center md:text-left">
              <Adn className="mb-8 block mx-auto md:mx-0" />
              <p className="text-2xl text-gray-800 mb-4 font-bold">ADN</p>
              <p className="text-gray-500 font-normal text-xl">
                Vemos y anhelamos ser una iglesia que ama a Jesús y a las
                personas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ zIndex: '-1', backgroundColor: '#FACFB0' }}>
        <div className="container mx-auto mt-40 text-center relative pb-20 md:pb-40 pt-10">
          <Separator className="block mx-auto" />
          <p className="font-sans uppercase text-gray-500 tracking-wider mt-4 mb-4 font-bold">
            Iglesia en línea
          </p>
          <p className="font-serif text-4xl text-gray-800 mb-16">
            Últimos servicios
          </p>
          <div className="flex flex-wrap flex-col sm:flex-row justify-between text-left pb-16">
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
                  className="flex-1 px-12 mb-8 lg:mb-0"
                >
                  <Image
                    width={standard.width}
                    height={standard.height}
                    src={standard.url}
                    alt=""
                  />
                  <p className="text-2xl text-gray-800 my-4 font-medium">
                    {name[0]}
                  </p>
                  <p className="text-sm font-medium text-gray-700 mb-4">
                    {date[0]}
                  </p>
                </a>
              );
            })}
          </div>

          <a
            href="https://www.youtube.com/c/UnionChurchcl"
            className="tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary hover:bg-primary-dark text-white transition duration-150 ease-in-out"
          >
            Ir al canal de Youtube
          </a>
        </div>
      </div>
      <div className="bg-oil">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 relative ">
          <div className="sm:px-12">
            <p className="font-sans uppercase text-white tracking-wider mb-4 font-bold text-center md:text-left">
              Mantente informado
            </p>
            <p className="font-serif text-4xl lg:text-5xl text-white text-center md:text-left mb-4 md:pb-16">
              Suscríbete a nuestro <br />
              boletín de noticias
            </p>
          </div>
          <form
            className="flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:-top-12 md:right-12 relative md:absolute"
            onSubmit={onSubmit}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="firstname"
            >
              Nombre
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Ingresa tu nombre"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={firstname}
                onChange={handleChange}
              />
              {firstnameError && <Error />}
            </div>

            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Ingresa tu apellido"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={lastname}
                onChange={handleChange}
              />
              {lastnameError && <Error />}
            </div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative mb-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={email}
                onChange={handleChange}
              />
              {emailError && <Error />}
            </div>
            {error ? (
              <div className="bg-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>{error}</p>
              </div>
            ) : null}
            {successMessage ? (
              <div className="bg-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>{successMessage}</p>
              </div>
            ) : null}

            <button
              type="submit"
              className={`inline px-8 py-3 border border-primary bg-primary text-white uppercase text-sm tracking-wider font-bold ${
                isLoading ? 'disabled:cursor-not-allowed' : null
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
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

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=3&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
