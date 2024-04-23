import { Produto } from '@/app/produtos/page';

export default async function ProdutosLista() {
  let produtos: Produto[] = [];

  try {
    const response = await fetch('https://api.origamid.online/produtoss', {
      next: {
        revalidate: 5,
      },
    });

    if (!response.ok) {
      throw new Error('Não foi possível carregar os produtos.');
    }

    produtos = (await response.json()) as Produto[];
  } catch (err) {
    return <p>Ocorreu um erro nessa lista de produtos.</p>;
  }

  return (
    <ul>
      {produtos.map((produto) => {
        return (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Valor: R$ {produto.preco}</p>
          </li>
        );
      })}
    </ul>
  );
}
