/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import { extractId } from '@/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  try {
    if (page) {
      const res = await fetch(`https://swapi.dev/api/films/?page=${page}`);
      const data = await res.json();

      data.results = data.results.map((film: any) => {
        const id = extractId(film.url);
        return {
          ...film,
          image: `/star-wars/films/${id}.jpg`,
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
