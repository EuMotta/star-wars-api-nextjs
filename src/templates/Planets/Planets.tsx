/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container';
import Search from '@/components/Search/Search';
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
        <div className="mt-5">
          <Search />
        </div>
        <Container className="flex flex-wrap gap-20 justify-evenly">
          {data.results.map((planets: any, index: number) => (
            <motion.div
              key={planets.name}
              variants={fadeIn('down', 'tween', index / 7, 1)}
            >
              <div>
                <PlanetsCard
                  img={planets.image}
                  data={planets}
                  href={`/choices/planets/profile/${planets.id}`}
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
