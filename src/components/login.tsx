'use client';

import { login } from '@/actions/login';
import React from 'react';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function realizarLogin() {
    const response = await login(username, password);

    if (response) {
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
