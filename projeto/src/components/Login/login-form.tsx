'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Forms/button';
import Input from '@/components/Forms/input';
import ErrorMessage from '../Helper/error-message';
import React from 'react';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) {
      window.location.href = '/conta';
    }
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />
        {/* <input type="text" name="username" placeholder="usuário" /> */}
        {/* <input type="password" name="password" placeholder="senha" /> */}
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
