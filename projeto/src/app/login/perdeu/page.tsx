import LoginPerdeuForm from "@/components/Login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Perdeu a senha',
  description: 'Recupere sua senha no site Dogs.'
}

// export const dynamic = 'force-dynamic';

export default function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
