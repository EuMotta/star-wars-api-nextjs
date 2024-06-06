'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [id, setId] = useState<number | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (id !== null) {
      router.push(`/choices/people/profile/${id}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h3 className="mb-4 text-xl font-semibold">Qual o id do personagem?</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="number"
          value={id ?? ''}
          onChange={(e) =>
            setId(e.target.value ? parseInt(e.target.value) : null)
          }
          className="border-2 border-gray-300 p-2 rounded-md"
          placeholder="Digite o ID"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Procurar
        </button>
      </form>
    </div>
  );
};

export default Page;
