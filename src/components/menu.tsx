import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre#empresa" prefetch={true} scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
    </ul>
  );
}
