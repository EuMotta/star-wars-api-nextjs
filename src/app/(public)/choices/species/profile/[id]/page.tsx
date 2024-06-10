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
    reverse: false,
    type: 'species',
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
    <div className="flex flex-col mt-20 items-center justify-center text-white min-h-screen p-6">
      <DataProvider data={data} loading={loading}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <Image
                src={data.image}
                alt={data.name}
                width={800}
                height={800}
                className="object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="grid gap-4">
              <div>
                <h2 className="text-xl font-semibold">Classificação</h2>
                <p>{data.classification}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Designação</h2>
                <p>{data.designation}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Altura Média</h2>
                <p>{data.average_height} cm</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Cores de Pele</h2>
                <p>{data.skin_colors}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Cores de Cabelo</h2>
                <p>{data.hair_colors}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Cores de Olhos</h2>
                <p>{data.eye_colors}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Expectativa de Vida</h2>
                <p>{data.average_lifespan} anos</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Língua</h2>
                <p>{data.language}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <h2 className="text-xl font-semibold">Filmes</h2>

              <ul className="list-disc list-inside">
                {data.films.map((film: Film) => (
                  <li key={film.url}>
                    <Button
                      href={`/choices/films/profile/${extractId(film.url)}`}
                      className="hover:text-primary"
                      unstyled
                    >
                      {film.title} (Episódio {film.episode_id})
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Personagens</h2>
              <ul className="list-disc list-inside">
                {data.people.map((person: Character) => (
                  <li key={person.url}>
                    <Button
                      href={`/choices/people/profile/${extractId(person.url)}`}
                      className="hover:text-primary"
                      unstyled
                    >
                      {person.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DataProvider>
    </div>
  );
};

export default Page;
