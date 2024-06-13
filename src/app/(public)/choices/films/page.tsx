'use client';
import Loading from '@/components/ui/Loading/loading';
import NoData from '@/components/ui/NoData/no-data';
import { useData } from '@/Hooks';
import { DataProvider } from '@/providers/DataProvider';
import FilmsList from '@/templates/Films/Films';
import styles from '@/templates/peoples/Peoples.module.css';
const Page = () => {
  const { loading, data } = useData({
    url: '/api/star-wars',
    reverse: true,
    type: 'films',
    page: 1,
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
        <FilmsList />
      </DataProvider>
    </div>
  );
};

export default Page;
