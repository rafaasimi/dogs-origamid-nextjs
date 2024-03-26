'use server';

import { Produto } from '@/app/produtos/page';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function adicionarProdutoAction(formData: FormData) {
  const produto: Produto = {
    nome: formData.get('nome') as string,
    descricao: formData.get('descricao') as string,
    preco: Number(formData.get('preco')),
    estoque: Number(formData.get('estoque')),
    importado: formData.get('importado') ? 1 : 0,
  };

  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(produto),
  });

  await response.json();

  revalidatePath('/produtos');
  redirect('/produtos');
}
