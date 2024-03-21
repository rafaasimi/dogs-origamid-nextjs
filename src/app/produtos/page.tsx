import Link from 'next/link';

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 5,
    },
  });
  const data = (await response.json()) as Produto[];

  return (
    <main>
      <Link href={'/produtos/adicionar'}>Adicionar produto</Link>

      <h1>Produtos</h1>
      <ul>
        {data.map((produto) => {
          return (
            <li key={produto.id}>
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <p>Valor: R$ {produto.preco}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
