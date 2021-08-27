import Head from 'next/head';
import Image from 'next/image';
import { Footer } from './shapes';
import PropTypes from 'prop-types';
import { Facebook, Youtube, Instagram } from '../components/icons';

export const siteTitle = 'Union Church | Una Iglesia Viña';

export function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Transformar la ciudad, influenciar al mundo, ayudar a las personas a conocer, amar y compartir a Jesús."
        />
        <meta
          property="og:image"
          content="https://unionchurch.vercel.app/images/og-image.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <title>{title} | Union Church</title>
      </Head>

      <main>{children}</main>
      <div className="bg-gray">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 sm:px-0 py-32 text-white">
          <div className="md:pl-12">
            <div className="mb-8">
              <Image
                src="/logo-white.png"
                width={146}
                height={73}
                alt="logo"
                layout="fixed"
              />
            </div>
            <a
              href="/give"
              className="tracking-wider uppercase text-sm px-8 py-3 border border-white font-bold bg-transparent text-white transition duration-150 ease-in-out"
            >
              Dar
            </a>
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
        <div className="flex justify-center mb-8">
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
        <p className="text-white text-center mb-8">© Union Church 2021</p>
        <div style={{ height: '32px', overflowX: 'hidden' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
