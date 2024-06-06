'use client';
import Image from 'next/image';
import React from 'react';

import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import Button from '@/components/Button';
import { extractId } from '@/utils';
import { Film, Starship, Vehicle } from '../../../../../../../@Types/global';

type PageProps = {
  params: {
    id: number;
  };
};

const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'people',
    single: params.id,
  });
  console.log(data);
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
        <div className="flex flex-wrap justify-evenly w-full">
          <Image
            src={data.image}
            alt={data.name}
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mt-6">{data.name}</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Altura:</span> {data.height}{' '}
                  cm
                </p>
                <p>
                  <span className="font-semibold">Peso:</span> {data.mass} kg
                </p>
                <p>
                  <span className="font-semibold">Cor do cabelo:</span>{' '}
                  {data.hair_color}
                </p>
                <p>
                  <span className="font-semibold">Cor da pele:</span>{' '}
                  {data.skin_color}
                </p>
                <p>
                  <span className="font-semibold">Cor dos olhos:</span>{' '}
                  {data.eye_color}
                </p>
                <p>
                  <span className="font-semibold">Ano de nascimento:</span>{' '}
                  {data.birth_year}
                </p>
                <p>
                  <span className="font-semibold">Gênero:</span> {data.gender}
                </p>
                <p>
                  <span className="font-semibold">Planeta natal:</span>{' '}
                  {data.homeworld.name}
                </p>
              </div>
              <div className="space-y-4">
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
                <div>
                  <span className="font-semibold">Veículos:</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-2">
                    {data.vehicles.map((vehicle: Vehicle, index: number) => {
                      const vehicleId = extractId(vehicle.url);
                      return (
                        <li key={index}>
                          <Button
                            href={`/choices/vehicles/profile/${vehicleId}`}
                            className="hover:text-primary"
                            unstyled
                          >
                            {vehicle.name} ({vehicle.model})
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Naves estelares:</span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {data.starships.map((starship: Starship, index: number) => {
                      const starshipId = extractId(starship.url);
                      return (
                        <li key={index}>
                          <Button
                            href={`/choices/starships/profile/${starshipId}`}
                            className="hover:text-primary"
                            unstyled
                          >
                            {starship.name} ({starship.model})
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
