import { buscarAula, buscarCurso, buscarCursos } from '@/app/api/cursos';
import Link from 'next/link';

import { Aula } from '@/app/api/cursos';

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export async function generateStaticParams() {
  const cursos = await buscarCursos();
  const aulas = await Promise.all(
    cursos.map((curso) => buscarCurso(curso.slug))
  );

  return aulas
    .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      aula: aula.slug,
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
    }));
}

export default async function AulaPage({ params }: PageParams) {
  const aula = await buscarAula(params.curso, params.aula);

  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>
        Retornar para: {params.curso}
      </Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração: {aula.tempo}</p>
    </main>
  );
}
