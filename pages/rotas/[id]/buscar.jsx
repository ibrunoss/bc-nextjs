import { useRouter } from "next/router"

export default function buscar() {
  const router = useRouter();
  const codigo = router.query.id;
  return (<div><h1>Rotas / {codigo} / buscar</h1></div>)
}