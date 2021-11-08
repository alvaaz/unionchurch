import React, { useState } from 'react';
import { Duplicate, Check } from '../components/icons';
import { Layout, Header2 } from '../components';
import Image from 'next/image';
import dar from '../public/images/dar.png';

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
    <Layout title="Dar">
      <Header2 />
      <div className="bg-pink">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 md:pt-16 relative ">
          <div className="md:pb-40 md:pt-32">
            <p className="font-sans uppercase text-gray-500 tracking-wider mb-4 font-bold md:text-left">
              Dar
            </p>
            <p className="font-serif text-4xl lg:text-5xl text-gray-800 md:text-left mb-8">
              Gracias por invertir <br />
              en el Reino
            </p>
            <p className="text-gray-500 font-normal text-xl md:w-1/2 mb-8">
              Los diezmos y las ofrendas de los miembros, participantes y amigos
              de esta Comunidad de fe, Union Church, son la única fuente de
              recursos financieros para llevar adelante y extender la obra.
            </p>
            <p className="text-gray-500 font-normal text-xl md:w-1/2 mb-8">
              Creemos que Dios es dueño de todo, absolutamente todo y eso
              incluye nuestra vida, tiempo y recursos de toda naturaleza. Como
              consecuencia de ello nos consideramos administradores o mayordomos
              de estos recursos.
            </p>
            <p className="text-gray-500 font-normal text-xl md:w-1/2 mb-8">
              Creemos que los diezmos deben ser entregados totalmente, con
              alegría y generosidad, en la comunidad donde estamos plantados y o
              arraigados, y en consecuencia donde nos alimentamos, crecemos y
              damos fruto. Los recursos serán destinados a la obra, sus
              misiones, proyectos, mantención y crecimiento.
            </p>
            <p className="text-gray-500 font-normal text-xl md:w-1/2">
              Puedes hacer llegar tus diezmos, ofrendas y donaciones depositando
              o transfiriendo a la cuenta de la Corporación Iglesia Union.
            </p>

            <div className="flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:top-16 md:right-12 relative md:absolute">
              <div className="mb-8">
                <Image
                  src={dar}
                  alt="Give"
                  layout="responsive"
                  objectFit="cover"
                  height={534}
                  width={641}
                  placeholder="blur"
                ></Image>
              </div>
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
    </Layout>
  );
}
