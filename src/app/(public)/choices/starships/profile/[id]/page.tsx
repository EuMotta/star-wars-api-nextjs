'use client';
import Image from 'next/image';

import Button from '@/components/Button';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import { extractId } from '@/utils';
import { Film } from '../../../../../../../@Types/global';

type PageProps = {
  params: {
    id: number;
  };
};

const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: false,
    type: 'starships',
    single: params.id,
  });

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loading text="Carregando" img="/loading/loading3.gif" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen justify-center items-center">
        <NoData img="/error/NoData.gif" text="Sem informações nesta página" />
      </div>
    );
  }
  console.log(data);
  return (
    <div className="flex flex-col mt-20 items-center justify-center  text-white min-h-screen p-6">
      <DataProvider data={data} loading={loading}>
        <div className=" bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <div className="grid md:grid-cols-2">
            <div className="flex justify-center items-center">
              <Image
                src={data.image}
                alt={data.name}
                width={800}
                height={800}
                className="object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 ">
              <div>
                <div>
                  <h2 className="text-xl font-semibold">Modelo</h2>
                  <p>{data.model}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Fabricante</h2>
                  <p>{data.manufacturer}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Custo em Créditos</h2>
                  <p>{data.cost_in_credits}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Comprimento</h2>
                  <p>{data.length} metros</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Velocidade Máxima na Atmosfera
                  </h2>
                  <p>{data.max_atmosphering_speed} km/h</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Tripulação</h2>
                  <p>{data.crew}</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-xl font-semibold">Passageiros</h2>
                  <p>{data.passengers}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Capacidade de Carga</h2>
                  <p>{data.cargo_capacity} kg</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Consumíveis</h2>
                  <p>{data.consumables}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Classificação do Hyperdrive
                  </h2>
                  <p>{data.hyperdrive_rating}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">MGLT</h2>
                  <p>{data.MGLT}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Classe da Nave</h2>
                  <p>{data.starship_class}</p>
                </div>
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold">Aparece nos Filmes</h2>
                  <ul className="list-disc list-inside">
                    {data.films.map((film: Film, index: number) => {
                      const filmId = extractId(film.url);
                      return (
                        <li key={index}>
                          <Button
                            href={`/choices/films/profile/${filmId}`}
                            className="hover:text-primary"
                            unstyled
                          >
                            {film.title} (Episódio {film.episode_id})
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataProvider>
    </div>
  );
};

export default Page;
