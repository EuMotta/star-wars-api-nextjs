/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } },
) {
  const { searchParams } = new URL(request.url);
  const type = params.type;
  const page = searchParams.get('page');

  try {
    const res = await fetch(`https://swapi.dev/api/${type}/?page=${page}`);
    const data = await res.json();

    const startIndex = (Number(page) - 1) * 10 + 1;

    data.results = data.results.map((personagem: any, index: number) => ({
      ...personagem,
      image: `/star-wars/people/${startIndex + index + 1}.jpg`,
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Erro interno', { status: 500 });
  }
}
