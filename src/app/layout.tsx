import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: {
    default: 'Dogs - Next',
    template : '%s | Dogs - Next'
  },
  description:
    'Dogs: Uma rede social para cachorros criada no curso de NextJS da Origamid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
