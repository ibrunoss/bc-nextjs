import { useRouter } from "next/router"

import ButtonVoltarPgRotas from "../../../components/Button/VoltarPgRotas"

export default function Buscar() {
  const router = useRouter();
  const codigo = router.query.id;
  return (
    <div>
      <h1>Rotas / {codigo} / buscar</h1>
      <ButtonVoltarPgRotas />
    </div>
  )
}