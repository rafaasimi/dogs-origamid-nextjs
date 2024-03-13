import { buscarCursos } from '@/api/cursos';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function CursosPage() {
  const cursos = await buscarCursos();

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
