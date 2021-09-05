import Link from "next/link";

export default function rotas() {
  return (
    <div>
      <h1>Index Rotas</h1>
      <ul>
        <Link href="/rotas/params?idade=12&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Bruno">
          <li>Bruno</li>
        </Link>
      </ul>
    </div>
  )
}