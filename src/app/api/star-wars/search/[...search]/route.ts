/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import { extractId } from '@/utils';

export async function GET(
  request: NextRequest,
  { params }: { params: { search: string[] } },
) {
  const [search, name] = params.search;

  try {
    if (search && name) {
      const res = await fetch(
        `https://swapi.dev/api/${search}/?search=${name}`,
      );
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        data.results = data.results.map((item: any) => {
          const id = extractId(item.url);
          console.log('search', search);
          console.log('id', id);
          return {
            ...item,
            image: `/star-wars/${search}/${id}.jpg`,
            id: id,
          };
        });
      }

      return NextResponse.json(data, { status: 200 });
    } else {
      return new Response('Parâmetros de busca inválidos', { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
