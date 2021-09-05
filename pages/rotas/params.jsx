import { useRouter } from "next/router"

import ButtonVoltarPgRotas from "../../components/Button/VoltarPgRotas"

export default function Params() {
  const router = useRouter();

  const {nome, idade} = router.query

  console.log(router)
  return (
    <div>
      <h1>{nome || "nome"}, {idade || "idade"}</h1>
      <ButtonVoltarPgRotas />
    </div>
  )
}