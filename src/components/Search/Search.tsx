'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../Button';
import { extractId } from '@/utils';

type FormValues = {
  type: string;
  name: string;
};

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [results, setResults] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string>('');
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/star-wars/search/${data.type}/${data.name}`,
      );
      const resultData = await res.json();
      setResults(resultData.results);
    } catch (error) {
      console.error('Erro data:', error);
    } finally {
      setLoading(false);
    }
  };
  console.log(results);
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
      <form
        className="flex items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-4">
          <select
            id="type"
            {...register('type', { required: true })}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="films">Films</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
          {errors.type && <p className="text-red-500">Type is required</p>}
        </div>
        <div className="flex items-center space-x-4">
          <input
            id="name"
            type="text"
            placeholder="nome"
            {...register('name', { required: true })}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
      </form>
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      <div className="mt-4">
        {results?.length > 0 && (
          <ul className="list-disc list-inside">
            {results?.map((result: any) => {
              const resultId = extractId(result.url);
              return (
                <li
                  key={result.url}
                  className="text-sm flex items-center justify-between"
                >
                  <p>{result.name || result.title}</p>
                  <Button styled href={`/choices/${type}/profile/${resultId}`}>
                    Perfil
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
