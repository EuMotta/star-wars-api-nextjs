'use client';
import Image from 'next/image';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';

import { extractId } from '@/utils';

import {
  Character,
  Planet,
  Species,
  Starship,
  Vehicle,
} from '../../../../../../../@Types/global';

type PageProps = {
  params: {
    id: number;
  };
};

const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'films',
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
    <Container className="flex flex-col items-center justify-center   min-h-screen p-6">
      <DataProvider data={data} loading={loading}>
        <div className="grid md:grid-cols-4 w-3/4 justify-center gap-10">
          <div className="flex justify-center col-span-1 items-center">
            <Image
              src={data.image}
              alt={data.title}
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="gap-6 col-span-3 flex justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
              <p>
                <span className="font-semibold">Episódio:</span>{' '}
                {data.episode_id}
              </p>
              <p>
                <span className="font-semibold">Diretor:</span> {data.director}
              </p>
              <p>
                <span className="font-semibold">Produtor:</span> {data.producer}
              </p>
              <p>
                <span className="font-semibold">Data de Lançamento:</span>{' '}
                {data.release_date}
              </p>
              <p>
                <span className="font-semibold">Descrição:</span>{' '}
                {data.opening_crawl}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="font-semibold">Personagens:</span>
            <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-5">
              {data.characters.map((people: Character) => {
                const peopleId = extractId(people.url);
                console.log(people.image);
                return (
                  <Button
                    unstyled
                    key={people.url}
                    href={`/choices/people/profile/${peopleId}`}
                    className="cursor-pointer"
                  >
                    <Image
                      src={people.image}
                      width={100}
                      height={100}
                      alt={people.name}
                      className="rounded-full"
                    />
                    <p className="text-center">{people.name}</p>
                  </Button>
                );
              })}
            </div>
          </div>
          <div>
            <span className="font-semibold">Planetas:</span>
            <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-5">
              {data.planets.map((planet: Planet) => {
                const peopleId = extractId(planet.url);
                console.log(planet.image);
                return (
                  <Button
                    unstyled
                    key={planet.url}
                    href={`/choices/planets/profile/${peopleId}`}
                    className="cursor-pointer flex flex-col justify-center items-center"
                  >
                    <Image
                      src={planet.image}
                      width={100}
                      height={100}
                      alt={planet.name}
                      className="rounded-full"
                    />
                    <p className="text-center">{planet.name}</p>
                  </Button>
                );
              })}
            </div>
          </div>
          <div>
            <span className="font-semibold">Espécies:</span>
            <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-5">
              {data.species.map((species: Species) => {
                const peopleId = extractId(species.url);
                console.log(species.image);
                return (
                  <Button
                    unstyled
                    key={species.url}
                    href={`/choices/planets/profile/${peopleId}`}
                    className="cursor-pointer flex flex-col justify-center items-center"
                  >
                    <Image
                      src={species.image}
                      width={100}
                      height={100}
                      alt={species.name}
                      className="rounded-full"
                    />
                    <p className="text-center">{species.name}</p>
                  </Button>
                );
              })}
            </div>
          </div>
          <div>
            <span className="font-semibold">Naves Estelares:</span>
            <ul className="list-disc list-inside ml-4 mt-1">
              {data.starships.map((starship: Starship, index: number) => (
                <li key={index}>
                  <Button
                    href={`/choices/starships/profile/${extractId(
                      starship.url,
                    )}`}
                    className="hover:text-primary"
                    unstyled
                  >
                    {starship.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-semibold">Veículos:</span>
            <ul className="list-disc list-inside ml-4 mt-1">
              {data.vehicles.map((vehicle: Vehicle, index: number) => (
                <li key={index}>
                  <Button
                    href={`/choices/vehicles/profile/${extractId(vehicle.url)}`}
                    className="hover:text-primary"
                    unstyled
                  >
                    {vehicle.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DataProvider>
    </Container>
  );
};

export default Page;
