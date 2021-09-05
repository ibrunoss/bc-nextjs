import { useRouter } from "next/router"

export default function params() {
  const router = useRouter();

  const {nome, idade} = router.query

  console.log(router)
  return (<div><h1>{nome || "nome"}, {idade || "idade"}</h1></div>)
}