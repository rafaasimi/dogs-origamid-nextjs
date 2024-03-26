'use client';

import { adicionarProdutoAction } from '@/actions/produtos';
import { useFormStatus } from 'react-dom';

function Button() {
  const status = useFormStatus();

  //  status.data
  //  status.action
  //  status.method
  //  status.pending

  return (
    <button type="submit" disabled={status.pending}>
      Cadastrar
    </button>
  );
}

export function AdicionarProduto() {
  return (
    <div>
      <h1>Cadastrar novo produto:</h1>
      <form action={adicionarProdutoAction}>
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

        <Button />
      </form>
    </div>
  );
}
