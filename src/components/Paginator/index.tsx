import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Section from '../Section';

type Props = {
  totalCount?: number;
  pageSize: number;
  type: string;
  maxPages: number;
  currentPage: number;
};

const Paginator = (props: Props) => {
  const { totalCount, type, maxPages } = props;
  let { currentPage } = props;
  const [pageNumbers] = useState<number[]>(
    Array.from({ length: maxPages }, (_, i) => i + 1),
  );
  const router = useRouter();

  const handleNext = () => {
    currentPage++;
    router.push(`/choices/${type}/${currentPage}`);
  };

  const handleBack = () => {
    currentPage--;
    router.push(`/choices/${type}/${currentPage}`);
  };

  const handlePageClick = (page: number) => {
    router.push(`/choices/${type}/${page}`);
  };

  if (!totalCount) {
    return <div className="text-gray-500">Total indefinido</div>;
  }

  return (
    <Section className="flex items-center justify-center space-x-4 p-4 shadow-md rounded-md">
      <button
        onClick={handleBack}
        disabled={currentPage <= 1}
        className={`px-4 py-2 text-white rounded ${
          currentPage <= 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Anterior
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded ${
            currentPage == page
              ? 'bg-blue-700 text-white'
              : 'bg-white text-blue-500 hover:bg-blue-100'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage >= maxPages}
        className={`px-4 py-2 text-white rounded ${
          currentPage >= maxPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Próximo
      </button>
    </Section>
  );
};

export default Paginator;
