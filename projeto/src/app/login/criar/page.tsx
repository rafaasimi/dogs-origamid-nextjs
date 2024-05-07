import LoginCriarForm from "@/components/Login/login-criar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Crie sua conta',
  description: 'Crie sua conta no site Dogs.'
}

export default function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <LoginCriarForm />
    </div>
  );
}
