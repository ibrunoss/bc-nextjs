import { useRouter } from "next/router"

import ButtonVoltarPgRotas from "../../../components/Button/VoltarPgRotas"

export default function Nome() {
  const router = useRouter();
  const codigo = router.query.id;
  const nome = router.query.nome;
  return (
    <div>
      <h1>Rotas / {codigo} / {nome}</h1>
      <ButtonVoltarPgRotas />
    </div>
  )
}