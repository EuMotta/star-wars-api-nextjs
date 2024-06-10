/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useData } from '@/providers/DataProvider';
import { motion } from 'framer-motion';

import { extractId } from '@/utils';
import { fadeIn } from '@/utils/motion';

import SpeciesCard from './SpeciesCard';

const SpeciesList = () => {
  const { data } = useData();
  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Container className="flex flex-wrap gap-20 justify-evenly">
          {data.results.map((specie: any, index: number) => {
            const specieId = extractId(specie.url);
            return (
              <motion.div
                key={specie.name}
                variants={fadeIn('down', 'tween', index / 7, 1)}
              >
                <div>
                  {specieId}
                  <SpeciesCard
                    img={specie.image}
                    data={specie}
                    href={`/choices/species/profile/${specieId}`}
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

export default SpeciesList;
