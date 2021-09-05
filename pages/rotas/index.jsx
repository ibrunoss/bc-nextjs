import Link from "next/link";
import router from "next/router";

export default function Rotas() {
  function navegarPara(url) {
    return () => router.push(url)
  }

  function navegarComQueryPara(url, query) {
    return () => router.push({
      pathname: url,
      query
    })
  }

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
      <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <button onClick={navegarComQueryPara("/rotas/params", { idade: 12, nome: "Ana" })}>Params</button>
        <button onClick={navegarPara("/rotas/123/buscar")}>Buscar</button>
        <button onClick={navegarPara("/rotas/123/Bruno")}>Bruno</button>
      </div>
    </div>
  )
}