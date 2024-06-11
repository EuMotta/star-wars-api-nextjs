'use client';
import React from 'react';

import Paginator from '@/components/Paginator';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import styles from '@/templates/peoples/Peoples.module.css';
import VehiclesList from '@/templates/Vehicles/Vehicles';
type PageProps = {
  params: {
    page: number;
  };
};
const Page = ({ params }: PageProps) => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'vehicles',
    page: params.page,
  });
  console.log(data);
  if (loading) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <Loading text="Carregando" img="/loading/loading3.gif" />
      </div>
    );
  }
  if (!data.results) {
    return (
      <div className="flex h-[100vh]  justify-center items-center">
        <NoData img="/error/NoData.gif" text="Sem informações nesta página" />
      </div>
    );
  }
  return (
    <div className={styles.peoples}>
      <DataProvider data={data} loading={loading}>
        <VehiclesList />
        <Paginator
          type="starships"
          maxPages={4}
          totalCount={data.results.length}
          pageSize={12}
          currentPage={params.page}
        />
      </DataProvider>
    </div>
  );
};

export default Page;