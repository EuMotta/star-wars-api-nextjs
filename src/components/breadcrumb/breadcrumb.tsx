'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

import Button from '../Button';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav
      className="flex px-5 justify-center rounded-full"
      aria-label="Breadcrumb"
    >
      <ul className="inline-flex bg-primary rounded-b-full px-5 items-center space-x-4">
        <li>
          <Button unstyled href="/" className="flex gap-2 uppercase ">
            <MdHome size={20} />
            Home
          </Button>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const segmentName = segment.replace(/-/g, ' ');

          return (
            <li key={index} className="flex gap-2">
              {!isLast ? (
                <>
                  <FaAngleRight size={20} />
                  <Button unstyled href={href} className="uppercase">
                    {segmentName}
                  </Button>
                </>
              ) : (
                <>
                  <FaAngleRight size={20} />
                  <span>{segmentName}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
