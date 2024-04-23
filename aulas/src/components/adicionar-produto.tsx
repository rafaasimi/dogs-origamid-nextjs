'use client';

import { adicionarProdutoAction } from '@/actions/produtos';
import { useFormState, useFormStatus } from 'react-dom';

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Cadastrar
    </button>
  );
}

export function AdicionarProduto() {
  const [state, formAction] = useFormState(adicionarProdutoAction, {
    errors: [],
  });

  console.log(state);

  return (
    <div>
      <h1>Cadastrar novo produto:</h1>
      <form action={formAction}>
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

        {state.errors.map((error, i) => (
          <p style={{ color: 'red' }} key={i}>
            {error}
          </p>
        ))}
        <Button />
      </form>
    </div>
  );
}
