/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import { extractId } from '@/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  try {
    if (page) {
      const res = await fetch(`https://swapi.dev/api/vehicles/?page=${page}`);
      const data = await res.json();

      data.results = data.results.map((vehicle: any) => {
        const id = extractId(vehicle.url);
        return {
          ...vehicle,
          image: `/star-wars/vehicles/${id}.jpg`,
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
