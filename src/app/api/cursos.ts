export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  error?: string;
};

export type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function buscarCursos() {
  const response = await fetch('https://api.origamid.online/cursos');
  return (await response.json()) as Curso[];
}

export async function buscarCurso(curso_slug: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso_slug}`
  );
  return (await response.json()) as Curso & { aulas: Aula[] };
}

export async function buscarAula(curso_slug: string, aula_slug: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso_slug}/${aula_slug}`
  );
  return (await response.json()) as Aula;
}
