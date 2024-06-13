'use client';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';

import ChoiceCard from './ChoiceCard';
import styles from './Choices.module.css';
import Search from '@/components/Search/Search';

const choicesData = [
  {
    title: 'Personagens',
    img: '/star-wars/people/4.jpg',
    href: '/choices/people/1',
  },
  {
    title: 'Naves Espaciais',
    img: '/star-wars/starships/card.jpg',
    href: '/choices/starships/1',
  },
  {
    title: 'Planetas',
    img: '/star-wars/planets/card.jpg',
    href: '/choices/planets/1',
  },
  {
    title: 'Espécies',
    img: '/star-wars/species/card.jpg',
    href: '/choices/species/1',
  },
  {
    title: 'Veículos',
    img: '/star-wars/vehicles/card.jpeg',
    href: '/choices/vehicles/1',
  },
  {
    title: 'Filmes',
    img: '/star-wars/films/card.jpg',
    href: '/choices/films/1',
  },
];

const Choices = () => {
  return (
    <div className={styles.choices}>
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mt-5">
            <Search />
          </div>
          <Container className={styles.choices_content}>
            {choicesData.map((choice, index) => (
              <motion.div
                key={choice.title}
                variants={fadeIn('down', 'tween', index / 7, 1)}
              >
                <ChoiceCard
                  key={index}
                  title={choice.title}
                  img={choice.img}
                  href={choice.href}
                />
              </motion.div>
            ))}
          </Container>
        </motion.div>
      </Section>
    </div>
  );
};

export default Choices;
