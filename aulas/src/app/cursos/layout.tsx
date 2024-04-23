import { buscarCursos } from '@/app/api/cursos';
import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cursos Origamid',
  description: 'Cursos online de Front End e UI Design.',
  keywords: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
  authors: [{ name: 'Rafael Simionato', url: 'https://rafaelsimionato.dev' }],
};

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursos = await buscarCursos();

  return (
    <div className="flex">
      <nav style={{ marginRight: '4rem' }}>
        <h2>Cursos</h2>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
}
