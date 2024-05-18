import React from 'react';

import Container from '@/components/Container';

import ChoiceCard from './ChoiceCard';
import styles from './Choices.module.css';

const Choices = () => {
  return (
    <div className={styles.choices}>
      <Container className={styles.choices_content}>
        <ChoiceCard
          title="Personagens"
          img="/star-wars/people/4.jpg"
          href="/choices/people/1"
        />
        <ChoiceCard
          title="naves espaciais"
          img="/star-wars/starships/card.jpg"
          href="/choices/starships"
        />
        <ChoiceCard
          title="planetas"
          img="/star-wars/planets/card.jpg"
          href="/choices/planets"
        />
        <ChoiceCard
          title="especies"
          img="/star-wars/species/card.jpg"
          href="/choices/species"
        />
        <ChoiceCard
          title="veiculos"
          img="/star-wars/vehicles/card.jpeg"
          href="/choices/vehicles"
        />
        <ChoiceCard
          title="filmes"
          img="/star-wars/films/card.jpg"
          href="/choices/films"
        />
      </Container>
    </div>
  );
};

export default Choices;
