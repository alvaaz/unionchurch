import { useRouter } from 'next/router';
import { Header2, Layout } from '../../components';

export default function Ministry() {
  const router = useRouter();
  return (
    <Layout>
      <Header2 />
      <div className="bg-pink">
        <div className="grid grid-cols-2 container mx-auto">
          <div className="bg-pink px-8 py-14">
            <p className="font-sans uppercase text-[#FE5245] tracking-wider mb-4 font-bold md:text-left">
              Ministerios
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-8">
              Ministerio de prueba
            </h1>
            <p className="text-xl text-gray-900">
              This team brings an inspired new wave of worship to the world.
              Their sound is dynamic, their songs are rich, and the message is
              authentic. Post: {router.query.slug}
            </p>
          </div>
          <div className="bg-red-400 row-span-2">4</div>
          <div className="bg-[#E66254] py-4">
            <div className="flex items-center justify-between px-8">
              <div>
                <p className="text-white text-lg font-medium">
                  Audiciones abiertas
                </p>
                <p className="text-white font-normal">
                  Periodo de postulación hasta el 19 de enero
                </p>
              </div>
              <a
                href="https://www.youtube.com/c/UnionChurchcl"
                className="tracking-wider uppercase text-sm px-4 py-3 border border-white font-bold bg-white text-black transition duration-150 ease-in-out"
              >
                Solicitar unirse
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 container mx-auto">
        <div className="col-span-1 px-8 py-16">
          <h2 className="font-serif text-xl text-gray-800 mb-4">Descripción</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            scelerisque purus vel odio placerat ultrices. Vivamus dui augue,
            laoreet eu felis vel, luctus blandit lectus. Vivamus magna ligula,
            blandit sodales hendrerit vel, efficitur vel nisl. Aliquam faucibus
            consectetur iaculis. Quisque pulvinar nibh orci, ultrices
            consectetur velit varius at. Etiam quis libero lectus. Morbi
            placerat pharetra posuere. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Aliquam lacinia
            lobortis nisi sed suscipit.
          </p>
        </div>
        <div className="px-8 py-16">
          <h2 className="font-serif text-xl text-gray-800 mb-4">Horaris</h2>
          <p>Horarios</p>
        </div>
      </div>
    </Layout>
  );
}
