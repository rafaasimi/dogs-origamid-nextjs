'use client';

import { adicionarProdutoAction } from '@/actions/produtos';
import { Produto } from '@/app/produtos/page';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export function AdicionarProduto() {
  function adicionarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const produto: Produto = {
      nome: e.currentTarget.nome.value,
      preco: Number(e.currentTarget.preco.value),
      descricao: e.currentTarget.descricao.value,
      estoque: Number(e.currentTarget.estoque.value),
      importado: e.currentTarget.importado.checked ? 1 : 0,
    };

    adicionarProdutoAction(produto);
  }

  return (
    <div>
      <h1>Cadastrar novo produto:</h1>
      <form onSubmit={adicionarProduto}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" />

        <label htmlFor="preco">Preço:</label>
        <input type="text" name="preco" id="preco" />

        <label htmlFor="descricao">Descrição:</label>
        <input type="text" name="descricao" id="descricao" />

        <label htmlFor="estoque">Estoque:</label>
        <input type="number" name="estoque" id="estoque" />

        <label htmlFor="importado">
          <input type="checkbox" name="importado" id="importado" />
          Importado
        </label>

        <hr />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
