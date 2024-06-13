/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaLink } from 'react-icons/fa';

import Button from '@/components/Button';
import {
  CardBody,
  CardContainer,
  CardInfo,
} from '@/components/ui/Card/3d-card';

const VehiclesCard = ({
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
      <CardBody
        background={img}
        className=" duration-500 relative h-72 w-64 group/card dark:hover:shadow-2xl   border-black/[0.1] rounded-t-xl p-6 border flex justify-center items-center"
      />
      <CardInfo className="space-y-5">
        <h5>{data.title}</h5>
        <Button href={href} icon={<FaLink />} className="text-secondary">
          Veja mais
        </Button>
      </CardInfo>
    </CardContainer>
  );
};

export default VehiclesCard;
