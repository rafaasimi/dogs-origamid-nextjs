'use client';

import { cookies } from 'next/headers';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();

  console.log(params.acao);
  console.log(pathName);

  React.useEffect(() => {
    console.log('Rota mudou')
  }, [pathName])

  let conta: Conta = {
    autorizado: false,
    usuario: '',
  };

  // const token = cookies().get('token')?.value;
  // const response = await fetch('https://api.origamid.online/conta/perfil', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // if (response.ok) {
  //   conta = (await response.json()) as Conta;
  // }

  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre#empresa" prefetch={true} scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      <li>
        {conta.autorizado ? (
          `Olá ${conta.usuario}`
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}
