/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaLink } from 'react-icons/fa';

import Button from '@/components/Button';
import {
  CardBody,
  CardContainer,
  CardInfo,
} from '@/components/ui/Card/3d-card';
import Image from 'next/image';

const SpeciesCard = ({
  data,
  img,
  href,
}: {
  data: any;
  img: string;
  href: string;
}) => {
  console.log(data);
  return (
    <CardContainer>
      <CardBody className="duration-500 relative h-72 overflow-hidden bg-base-100 w-64 group/card dark:hover:shadow-2xl border-black/[0.1] rounded-t-xl border flex justify-center items-center">
        <div className=" w-full h-full">
          <Image
            src={img}
            alt={data.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            style={{
              filter: 'drop-shadow(5px 5px 5px black)',
            }}
          />
        </div>
      </CardBody>

      <CardInfo className="space-y-5">
        <h5>{data.name}</h5>
        <p>Classificação: {data.classification}</p>
        <Button href={href} icon={<FaLink />} className="text-secondary">
          Veja mais
        </Button>
      </CardInfo>
    </CardContainer>
  );
};

export default SpeciesCard;
