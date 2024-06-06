/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  try {
    const res = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await res.json();
    console.log(data);
    const filmPromises = data.films.map((filmUrl: string) =>
      fetch(filmUrl).then((res) => res.json()),
    );
    const filmsData = await Promise.all(filmPromises);
    data.films = filmsData;

    const residentPromises = data.residents.map((residentUrl: string) =>
      fetch(residentUrl).then((res) => res.json()),
    );
    const residentsData = await Promise.all(residentPromises);
    data.residents = residentsData;

    data.image = `/star-wars/planets/${Number(id) + 1}.jpg`;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
