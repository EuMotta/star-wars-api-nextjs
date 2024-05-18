/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Container from '@/components/Container';
import { useData } from '@/providers/DataProvider';

import styles from './Peoples.module.css';
import PeoplesCard from './PeoplesCard';

const PeoplesList = () => {
  const { data } = useData();
  return (
    <div className={styles.peoples}>
      <Container className="flex flex-wrap gap-10 justify-evenly">
        {data.results.map((people: any) => (
          <div key={people.name}>
            <PeoplesCard img={people.image} title={people.name} href="/" />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PeoplesList;
