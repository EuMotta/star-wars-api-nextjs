import React from 'react';

import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/ui/Card/3d-card';

const Peoples = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        background="/star-wars/people/4.jpg"
        className="bg-gray-50 relative group/card h-96 w-72 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  "
      >
        <CardItem
          as="p"
          translateZ="60"
          style={{
            filter: 'drop-shadow(5px 5px 4px black)',
          }}
          className="font-jedi text-white flex justify-center items-center h-full w-full"
        >
          Personagens
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Peoples;
