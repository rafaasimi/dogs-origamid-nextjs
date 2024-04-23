'use client';

import { cookies } from 'next/headers';
import Link from 'next/link';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React, { Suspense } from 'react';

type Conta = {
  autorizado: boolean;
  usuario: string;
};

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get('busca');
  return <div>Busca: {busca}</div>;
}

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();
  const router = useRouter();

  console.log(params.acao);
  console.log(pathName);

  React.useEffect(() => {
    // console.log('Rota mudou')
    // setTimeout(() => {
    //   router.push('/');
    // }, 5000);
    // setInterval(() => {
    //   router.refresh();
    // }, 5000)
  }, [router]);

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
    <>
      <Suspense>
        <Busca />
      </Suspense>
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
          <Link href="/animais">Animais</Link>
        </li>
        <li>
          {conta.autorizado ? (
            `Olá ${conta.usuario}`
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
      </ul>
    </>
  );
}
