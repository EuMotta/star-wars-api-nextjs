import { useRouter } from 'next/navigation';
import React from 'react';

import Button from '../Button';
import styles from './Paginator.module.css';
type Props = {
  totalCount?: number;
  pageSize: number;
  type: string;
  currentPage: number;
};

const Paginator = (props: Props) => {
  let { currentPage } = props;
  const { totalCount } = props;
  const router = useRouter();
  const handleNext = () => {
    currentPage++;
    router.push(`/choices/${props.type}/${currentPage}`);
  };
  const handleBack = () => {
    currentPage--;
    router.push(`/choices/${props.type}/${currentPage}`);
  };
  if (!totalCount) {
    return <div>Total indefinido</div>;
  }
  return (
    <div className={styles.paginator_content}>
      <Button onClick={handleBack} disabled={currentPage < 1}>
        Anterior
      </Button>
      <span>{currentPage}</span>
      <Button onClick={handleNext} disabled={totalCount < 10}>
        Próximo
      </Button>
    </div>
  );
};

export default Paginator;
