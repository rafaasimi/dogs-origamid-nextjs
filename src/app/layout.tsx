import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

import { font_body, font_display, font_externa } from './fonts';

export const metadata: Metadata = {
  title: {
    default: 'Dogs - Next',
    template: '%s | Dogs - Next',
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
      <body
        className={`${font_body.className} ${font_body.variable} ${font_display.variable} ${font_externa.variable}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
