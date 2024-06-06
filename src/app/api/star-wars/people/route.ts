/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const single = searchParams.get('single');
  console.log(single);

  try {
    if (page) {
      const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const data = await res.json();

      const startIndex = (Number(page) - 1) * 10 + 1;

      data.results = data.results.map((people: any, index: number) => ({
        ...people,
        image: `/star-wars/people/${startIndex + index + 1}.jpg`,
        id: startIndex + index,
      }));
      return NextResponse.json(data, { status: 200 });
    }

    if (single) {
      const res = await fetch(`https://swapi.dev/api/people/${single}`);
      const data = await res.json();

      const homeworldRes = await fetch(data.homeworld);
      const homeworldData = await homeworldRes.json();
      data.homeworld = homeworldData;

      const filmPromises = data.films.map((filmUrl: string) =>
        fetch(filmUrl).then((res) => res.json()),
      );
      const filmsData = await Promise.all(filmPromises);
      data.films = filmsData;

      const vehiclePromises = data.vehicles.map((vehicleUrl: string) =>
        fetch(vehicleUrl).then((res) => res.json()),
      );
      const vehiclesData = await Promise.all(vehiclePromises);
      data.vehicles = vehiclesData;

      const starshipPromises = data.starships.map((starshipUrl: string) =>
        fetch(starshipUrl).then((res) => res.json()),
      );
      const starshipsData = await Promise.all(starshipPromises);
      data.starships = starshipsData;

      data.image = `/star-wars/people/${Number(single) + 1}.jpg`;

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
