import React, { useReducer } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { siteTitle } from '../components/layout';
import {
  Separator,
  Adn,
  Vision,
  Mision,
  Newsletter,
} from '../components/shapes';
import { Facebook, Youtube, Instagram } from '../components/icons';

export function validate(field, value) {
  if (typeof value === 'string') value = value.trim();
  switch (field) {
    case 'firstname':
      if (value.length < 3) {
        return true;
      } else {
        return false;
      }
    case 'lastname':
      if (value.length < 3) {
        return true;
      } else {
        return false;
      }
    case 'email':
      if (value.length === 0) {
        return true;
      } else if (
        !value.includes('@') ||
        !value.includes('.') ||
        value.split('.')[1].length < 2
      ) {
        return true;
      } else {
        return false;
      }
    default:
      break;
  }
}

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  canISend: false,
  emailError: true,
  firstnameError: true,
  lastnameError: true,
  isLoading: false,
  successMessage: '',
  error: '',
};

const actions = {
  fieldsChanged: 'FIELDS_CHANGED',
  formSubmitted: 'FORM_SUBMITTED',
  submitSuccess: 'SUCCESS',
  submitError: 'ERROR',
};

function reducer(state, action) {
  let error;
  switch (action.type) {
    case actions.fieldsChanged: {
      error = validate(action.fieldName, action.payload);
      return {
        ...state,
        [action.fieldName]: action.payload,
        [action.fieldName + 'Error']: error,
        error: '',
        successMessage: '',
        canISend:
          !state.firstnameError && !state.lastnameError && !state.emailError,
      };
    }

    case actions.formSubmitted: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actions.submitSuccess: {
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload,
        email: '',
        firstname: '',
        lastname: '',
        emailError: true,
        firstnameError: true,
        lastnameError: true,
        canISend: false,
      };
    }

    case actions.submitError: {
      return {
        ...state,
        isLoading: false,
        email: '',
        firstname: '',
        lastname: '',
        error: action.payload,
        emailError: true,
        firstnameError: true,
        lastnameError: true,
        canISend: false,
      };
    }
    default:
      return state;
  }
}

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
      await axios.post('api/newsletter', { email, firstname, lastname });
      dispatch({ type: actions.submitSuccess, payload: 'Agregado' });
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
          className="container mx-auto pt-10 flex relative px-8 sm:px-0"
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
              className="text-center text-white m-0 font-serif text-6xl mb-20 md:text-8xl"
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
          <div className="flex justify-between text-left flex-col lg:flex-row md:px-16">
            <div className="flex-1 px-12 mb-12 lg:mb-0">
              <Mision className="mb-8" />
              <p className="text-2xl text-gray-800 mb-4">Misión</p>
              <p className="text-gray-500 font-normal">
                Conocer, llegar a ser, e impactar como Jesús
              </p>
            </div>
            <div className="flex-1 px-12 mb-12 lg:mb-0">
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
      </div>
      <div style={{ zIndex: '-1', backgroundColor: '#FACFB0' }}>
        <div className="container mx-auto my-40 text-center relative pb-20 pt-10">
          <Separator className="block mx-auto" />
          <p className="font-sans uppercase text-gray-500 tracking-wider mt-4 mb-4">
            Servicios
          </p>
          <p className="font-serif text-4xl text-gray-800 mb-16">
            Últimos servicios
          </p>
          <div className="flex flex-wrap flex-col sm:flex-row justify-between md:px-16 text-left pb-16">
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
                  <p className="my-4 uppercase text-sm tracking-wider font-bold text-gray-700">
                    {date[0]}
                  </p>
                  <p className="text-2xl text-gray-800 mb-4 font-medium">
                    {name[0]}
                  </p>
                </a>
              );
            })}
          </div>

          <a
            href="google.cl"
            className="inline px-8 py-3 border border-primary bg-primary text-white mr-8 uppercase text-sm tracking-wider font-bold"
          >
            Ir al canal de Youtube
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: '#435448' }}>
        <div className="container mx-auto flex justify-between flex-col px-8 sm:px-0 pb-20">
          <p className="font-serif text-4xl text-white pt-20 mb-20 text-center">
            Suscríbete a nuestro <br />
            boletín de noticias
          </p>
          <form
            action=""
            className="flex flex-col w-11/12 sm:w-1/2 mx-auto"
            onSubmit={onSubmit}
          >
            <label className="text-lg text-white mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              name="firstname"
              id="name"
              placeholder="Ingresa tu nombre"
              className="px-4 py-3 outline-none w-full mb-4"
              value={firstname}
              onChange={handleChange}
            />

            <label className="text-lg text-white mb-2" htmlFor="lastname">
              Apellido
            </label>

            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Ingresa tu apellido"
              className="px-4 py-3 outline-none w-full mb-4"
              value={lastname}
              onChange={handleChange}
            />

            <label className="text-lg text-white mb-2" htmlFor="email">
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingresa tu email"
              className="px-4 py-3 outline-none w-full mb-4"
              value={email}
              onChange={handleChange}
            />
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
              disabled={!canISend}
              type="submit"
              className="inline px-8 py-3 border border-primary bg-primary text-white uppercase text-sm tracking-wider font-bold disabled:text-opacity-80 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
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
