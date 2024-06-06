/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useData } from '@/providers/DataProvider';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';

import PlanetsCard from './PlanetsCard';

const PlanetsList = () => {
  const { data } = useData();
  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Container className="flex flex-wrap gap-20 justify-evenly">
          {data.results.map((people: any, index: number) => (
            <motion.div
              key={people.name}
              variants={fadeIn('down', 'tween', index / 7, 1)}
            >
              <div>
                <PlanetsCard
                  img={people.image}
                  data={people}
                  href={`/choices/people/profile/${people.id}`}
                />
              </div>
            </motion.div>
          ))}
        </Container>
      </motion.div>
    </Section>
  );
};

export default PlanetsList;
