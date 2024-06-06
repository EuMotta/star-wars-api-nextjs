import { useRouter } from 'next/navigation';
import Section from '../Section';

type Props = {
  totalCount?: number;
  pageSize: number;
  type: string;
  currentPage: number;
};

const Paginator = (props: Props) => {
  let { currentPage } = props;
  const { totalCount } = props;
  const router = useRouter();

  const handleNext = () => {
    currentPage++;
    router.push(`/choices/${props.type}/${currentPage}`);
  };

  const handleBack = () => {
    currentPage--;
    router.push(`/choices/${props.type}/${currentPage}`);
  };

  if (!totalCount) {
    return <div className="text-gray-500">Total indefinido</div>;
  }

  return (
    <Section className="flex items-center justify-center space-x-4 p-4shadow-md rounded-md">
      <button
        onClick={handleBack}
        disabled={currentPage < 1}
        className={`px-4 py-2 text-white rounded ${
          currentPage < 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Anterior
      </button>
      <span className="text-lg font-semibold">{currentPage}</span>
      <button
        onClick={handleNext}
        disabled={totalCount < 10}
        className={`px-4 py-2 text-white rounded ${
          totalCount < 10
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
