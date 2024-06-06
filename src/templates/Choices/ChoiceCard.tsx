import React from 'react';

import Button from '@/components/Button';
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/ui/Card/3d-card';

const ChoiceCard = ({
  title,
  img,
  href,
}: {
  title: string;
  img: string;
  href: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        background={img}
        className="bg-gray-50 relative h-80 w-60 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border flex justify-center items-center"
      >
        <Button
          href={href}
          className="h-full w-full flex justify-center items-center"
        >
          <CardItem
            as="p"
            translateZ="60"
            style={{
              filter: 'drop-shadow(5px 5px 4px black)',
            }}
            className="font-jedi text-white"
          >
            {title}
          </CardItem>
        </Button>
      </CardBody>
    </CardContainer>
  );
};

export default ChoiceCard;
