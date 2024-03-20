'use client';

import { getCookie, setCookie } from '@/actions/cookies';
import Acesso from '@/components/acesso';
import Cookies from '@/components/cookies';
import ServerFetch from '@/components/server-fetch';
import Width from '@/components/width';
import React from 'react';

export default function Home() {
  const [valor, setValor] = React.useState('');

  async function handleClick() {
    console.log('teste');
    const response = await setCookie('segredo', '123456');
    setValor(response.value);
    console.log(response);
  }

  return (
    <main>
      <h1>Home</h1>
      {/* <Acesso /> */}
      {/* <Width /> */}
      {/* <ServerFetch /> */}
      <Cookies />

      <h2>Valor: {valor}</h2>
      <button onClick={handleClick}>Definir cookie</button>
    </main>
  );
}
