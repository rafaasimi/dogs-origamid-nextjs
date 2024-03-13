import { buscarAula } from '@/api/cursos';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageParams) {
  const aula = await buscarAula(params.curso, params.aula);

  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>Retornar para: {params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração: {aula.tempo}</p>
    </main>
  );
}
