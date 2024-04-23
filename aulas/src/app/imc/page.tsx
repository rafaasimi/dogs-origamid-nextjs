import { CalcularIMC } from "@/components/calcular-imc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calcular IMC',
  description:
    'Essa é a página IMC',
};

export default function ImcPage() {

  return (
    <div>
      <h1>Calcular IMC</h1>
      <CalcularIMC />
    </div>
  )
}