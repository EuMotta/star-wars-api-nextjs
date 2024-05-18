import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero_bg}>
      <Section>
        <Container>
          <div className="h-screen text-white">
            <div className="h-3/4 w-4/5 flex items-center mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="space-y-5 w-4/5 mx-auto"
              >
                <motion.div variants={fadeIn('down', 'tween', 1, 3)}>
                  <div
                    className="p-5 flex justify-center items-center flex-col gap-10"
                    style={{
                      filter: 'drop-shadow(5px 5px 4px black)',
                    }}
                  >
                    <Image
                      src="/logo/star-wars.svg"
                      width={400}
                      height={400}
                      alt="logo"
                    />
                  </div>
                </motion.div>
                <motion.div variants={fadeIn('down', 'tween', 2, 3)}>
                  <div
                    className="p-5 flex justify-center items-center flex-col gap-10"
                    style={{
                      filter: 'drop-shadow(5px 5px 4px black)',
                    }}
                  >
                    <div className="text-center  space-y-5">
                      <h3 className="font-jedi">Explore o universo Jedi</h3>
                      <p>
                        Embarque em uma jornada épica através do universo Star
                        Wars. Utilizando a API SWAPI, você terá a oportunidade
                        de conhecer em detalhes os personagens icônicos, as
                        naves espaciais mais rápidas e os filmes que marcaram
                        gerações. Prepare-se para uma aventura intergaláctica!
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('up', 'tween', 1, 3)}
                  className="flex justify-center"
                >
                  <Button star className="w-1/2 text-center" href="/choices">
                    Começar
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
