/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  try {
    const res = await fetch(`https://swapi.dev/api/species/${id}`);
    const data = await res.json();
    console.log(data);
    const filmPromises = data.films.map((peopleUrl: string) =>
      fetch(peopleUrl).then((res) => res.json()),
    );
    const filmsData = await Promise.all(filmPromises);
    const peoplePromises = data.people.map((peopleUrl: string) =>
      fetch(peopleUrl).then((res) => res.json()),
    );
    const peopleData = await Promise.all(peoplePromises);
    data.films = filmsData;
    data.people = peopleData;

    data.image = `/star-wars/species/${Number(id)}.jpg`;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
