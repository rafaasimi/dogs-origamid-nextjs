import { getCookie } from '@/actions/cookies';
import React from 'react';

export default function Cookies() {
  const [cookie, setCookie] = React.useState('');

  async function buscarCookie() {
    const response = await getCookie('token');

    console.log(response);

    if (!response?.value) {
      return;
    }

    setCookie(response.value);
  }

  return (
    <div>
      <h2>Cookie: {cookie}</h2>
      <button onClick={buscarCookie}>Pegar Cookie</button>
    </div>
  );
}
