import LoginForm from '@/components/Login/login-form';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Logue sua conta no site Dogs.'
}

export default function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
