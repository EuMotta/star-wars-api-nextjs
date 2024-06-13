/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container';
import Search from '@/components/Search/Search';
import Section from '@/components/Section';
import { useData } from '@/providers/DataProvider';
import { motion } from 'framer-motion';

import { extractId } from '@/utils';
import { fadeIn } from '@/utils/motion';

import FilmsCard from './FilmsCard';

const FilmsList = () => {
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
          {data.results.map((film: any, index: number) => {
            const filmId = extractId(film.url);
            return (
              <motion.div
                key={film.name}
                variants={fadeIn('down', 'tween', index / 7, 1)}
              >
                {filmId}
                <div>
                  <FilmsCard
                    img={film.image}
                    data={film}
                    href={`/choices/films/profile/${filmId}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </Container>
      </motion.div>
    </Section>
  );
};

export default FilmsList;
