/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

function extractId(url: string): string {
  const matches = url.match(/(\d+)\/$/);
  if (matches && matches[1]) {
    return matches[1];
  }
  return '';
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  try {
    const res = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await res.json();

    const characterPromises = data.characters.map((url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((characterData: any) => ({
          ...characterData,
          image: `/star-wars/people/${extractId(url)}.jpg`,
        })),
    );
    const charactersData = await Promise.all(characterPromises);
    data.characters = charactersData;

    const planetPromises = data.planets.map((url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((planetData: any) => ({
          ...planetData,
          image: `/star-wars/planets/${extractId(url)}.jpg`,
        })),
    );
    const planetsData = await Promise.all(planetPromises);
    data.planets = planetsData;

    const starshipPromises = data.starships.map((url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((starshipData: any) => ({
          ...starshipData,
          image: `/star-wars/starships/${extractId(url)}.jpg`,
        })),
    );
    const starshipsData = await Promise.all(starshipPromises);
    data.starships = starshipsData;

    const vehiclePromises = data.vehicles.map((url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((vehicleData: any) => ({
          ...vehicleData,
          image: `/star-wars/vehicles/${extractId(url)}.jpg`,
        })),
    );
    const vehiclesData = await Promise.all(vehiclePromises);
    data.vehicles = vehiclesData;

    const speciesPromises = data.species.map((url: string) =>
      fetch(url)
        .then((res) => res.json())
        .then((speciesData: any) => ({
          ...speciesData,
          image: `/star-wars/species/${extractId(url)}.jpg`,
        })),
    );
    const speciesData = await Promise.all(speciesPromises);
    data.species = speciesData;

    data.image = `/star-wars/films/${id}.jpg`;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
