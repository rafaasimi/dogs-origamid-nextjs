import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs - Next",
  description: "Dogs: Uma rede social para cachorros criada no curso de NextJS da Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
