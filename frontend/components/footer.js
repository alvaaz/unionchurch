import Image from 'next/image';
import { Facebook, Youtube, Instagram } from '../components/icons';
import { FooterShape } from './shapes';

export default function Footer() {
  return (
    <div className="bg-gray">
      <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 sm:px-0 py-32 text-white">
        <div className="md:pl-12">
          <div className="mb-8">
            <Image src="/logo-white.svg" width={146} height={73} alt="logo" />
          </div>
          <a
            href="/dar"
            className="tracking-wider uppercase text-sm px-8 py-3 border border-white font-bold bg-transparent text-white transition duration-150 ease-in-out"
          >
            Dar
          </a>
        </div>

        <div className="mt-8 md:mt-0 mb-8 md:mb-0 md:px-12">
          <p className="font-serif text-2xl my-4 font-medium md:mt-0">
            Reuniones
          </p>
          <p className="mb-4">
            <span className="font-bold text-lg block">Reunión general</span>
            Domingos a las 11:00 hrs
          </p>
          <p>
            <span className="font-bold text-lg block">
              Reuniones de oración
            </span>
            <span className='block'>Domingos a las 10:00 hrs — Presencial</span>
            <span>Miércoles a las 20:00 hrs — Zoom</span>
          </p>
        </div>
        <div className="mb-8 md:mb-0">
          <p className="font-serif text-2xl my-4 font-medium md:mt-0">
            Contacto
          </p>
          <p className="mb-4">
            <span className="font-bold text-lg block">Teléfono</span> 32 2125033
          </p>
          <p>
            <span className="font-bold text-lg block">Celular / WhatsApp</span>
            +56 9 6569 6958
          </p>
        </div>
        <div className="md:px-12">
          <p className="font-serif text-2xl my-4 font-medium md:mt-0">
            Ubicación y horario
          </p>
          <p className="mb-4">Von Schroeders #356, Viña del mar, Chile</p>
          <p>
            <span className="font-bold text-lg block">Lunes a Viernes</span>
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
        <FooterShape />
      </div>
    </div>
  );
}
