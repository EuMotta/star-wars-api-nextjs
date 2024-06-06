'use client';
import Image from 'next/image';

import Button from '@/components/Button';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';

import { extractId } from '@/utils';

import { Character, Film } from '../../../../../../../@Types/global';

type PageProps = {
  params: {
    id: number;
  };
};

const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'planets',
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

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen p-6">
      <DataProvider data={data} loading={loading}>
        <div className="flex flex-wrap justify-evenly w-full space-y-5">
          <div>
            <Image
              src={data.image}
              alt={data.name}
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
              <p>
                <span className="font-semibold">Período de Rotação:</span>{' '}
                {data.rotation_period} horas
              </p>
              <p>
                <span className="font-semibold">Período Orbital:</span>{' '}
                {data.orbital_period} dias
              </p>
              <p>
                <span className="font-semibold">Diâmetro:</span> {data.diameter}{' '}
                km
              </p>
              <p>
                <span className="font-semibold">Clima:</span> {data.climate}
              </p>
              <p>
                <span className="font-semibold">Gravidade:</span> {data.gravity}
              </p>
              <p>
                <span className="font-semibold">Terreno:</span> {data.terrain}
              </p>
              <p>
                <span className="font-semibold">Água na Superfície:</span>{' '}
                {data.surface_water}%
              </p>
              <p>
                <span className="font-semibold">População:</span>{' '}
                {data.population}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Residentes:</span>
                <ul className="list-disc list-inside ml-4 mt-1">
                  {data.residents.map((resident: Character, index: number) => {
                    const residentId = extractId(resident.url);
                    return (
                      <li key={index}>
                        <Button
                          href={`/choices/people/profile/${residentId}`}
                          className="hover:text-primary"
                          unstyled
                        >
                          {resident.name}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <span className="font-semibold">Filmes:</span>
                <ul className="list-disc list-inside ml-4 mt-1">
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
      </DataProvider>
    </div>
  );
};

export default Page;
