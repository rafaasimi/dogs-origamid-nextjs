import { revalidatePathAction } from '@/actions/revalidate-path';
import Atualizar from '@/components/atualizar';
import React from 'react';

type Acao = {
  nome: string;
  preco: number;
  atualizada: string;
};

type PageParams = {
  params: {
    acao: string;
  };
};

export default async function AcaoPage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/acoes/${params.acao}`,
    {
      next: {
        //  revalidate: 5,
        tags: ['acoes'],
      },
    }
  );

  const acao = (await response.json()) as Acao;

  return (
    <main>
      <h1>Ações</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>{acao.preco}</p>
      <p>{acao.atualizada}</p>
    </main>
  );
}

// export default async function AcoesPage() {
//   const response = await fetch('https://api.origamid.online/acoes/lua', {
//     next: {
//       revalidate: 5,
//     },
//   });

//   const acao = (await response.json()) as {
//     simbolo: string;
//     atualizada: string;
//   };

//   return (
//     <main>
//       <h1>{acao.simbolo}</h1>
//       <h2>{acao.atualizada}</h2>
//     </main>
//   );
// }
