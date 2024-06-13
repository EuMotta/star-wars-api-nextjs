/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container';
import Search from '@/components/Search/Search';
import Section from '@/components/Section';
import { useData } from '@/providers/DataProvider';
import { motion } from 'framer-motion';

import { extractId } from '@/utils';
import { fadeIn } from '@/utils/motion';

import VehiclesCard from './VehiclesCard';

const VehiclesList = () => {
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
          {data.results.map((vehicle: any, index: number) => {
            const vehicleId = extractId(vehicle.url);
            return (
              <motion.div
                key={vehicle.name}
                variants={fadeIn('down', 'tween', index / 7, 1)}
              >
                {vehicleId}
                <div>
                  <VehiclesCard
                    img={vehicle.image}
                    data={vehicle}
                    href={`/choices/vehicles/profile/${vehicleId}`}
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

export default VehiclesList;
