import Image from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
  text: string;
  img: string;
};
const NoData = ({ text, img }: Props) => {
  return (
    <div>
      <Image src={img} width={200} height={200} alt={text} />
      {text}
    </div>
  );
};

export default NoData;
