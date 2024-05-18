'use client';
import React from 'react';

import Paginator from '@/components/Paginator';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import PeoplesList from '@/templates/peoples/PeoplesList';

type PageProps = {
  params: {
    page: number;
  };
};
const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'people',
    page: params.page,
  });
  if (loading) {
    return (
      <div className="flex h-[80vh] justify-center items-center">
        <Loading text="Carregando" img="/loading/loading3.gif" />
      </div>
    );
  }
  if (!data.results) {
    return (
      <div className="flex h-[80vh]  justify-center items-center">
        <NoData img="/error/NoData.gif" text="Sem informações nesta página" />
      </div>
    );
  }
  return (
    <div>
      <DataProvider data={data} loading={loading}>
        <PeoplesList />
        <Paginator
          type="people"
          totalCount={data.results.length}
          pageSize={12}
          currentPage={params.page}
        />
      </DataProvider>
    </div>
  );
};

export default Page;