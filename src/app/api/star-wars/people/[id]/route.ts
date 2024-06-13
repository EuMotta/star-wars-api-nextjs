/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  try {
    const res = await fetch(`https://swapi.dev/api/people/${id}`);
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

    data.image = `/star-wars/people/${id}.jpg`;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
