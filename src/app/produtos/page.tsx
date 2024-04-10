import ProdutosLista from '@/components/produtos-lista';
import Link from 'next/link';
import { Suspense } from 'react';

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  return (
    <main>
      <Link href={'/produtos/adicionar'}>Adicionar produto</Link>

      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos</p>
      <Suspense fallback={'Carregando ...'}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}
