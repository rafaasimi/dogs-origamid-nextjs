import { Metadata } from "next";
import dynamic from "next/dynamic";

const Width = dynamic(() => import('@/components/width'), {ssr: false})

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Essa é a página sobre',
};

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
    </main>
  )
}