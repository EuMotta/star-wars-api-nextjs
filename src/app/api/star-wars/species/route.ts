/* eslint-disable @typescript-eslint/no-explicit-any */
import { extractId } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  try {
    if (page) {
      const res = await fetch(`https://swapi.dev/api/species/?page=${page}`);
      const data = await res.json();

      data.results = data.results.map((planet: any) => {
        const id = extractId(planet.url);
        return {
          ...planet,
          image: `/star-wars/species/${id}.jpg`,
          id: id,
        };
      });

      return NextResponse.json(data, { status: 200 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
