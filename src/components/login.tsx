'use client';

import React from 'react';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function realizarLogin() {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  }

  return (
    <main>
      <h1>Login</h1>

      <div>
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={realizarLogin}>Entrar</button>
      </div>
    </main>
  );
}
