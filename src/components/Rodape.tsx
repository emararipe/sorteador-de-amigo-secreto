import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"

const Rodape = () => {
  const listaParticipantes = useListaParticipantes()

  const navegarPara = useNavigate()

  const iniciar = () => {
    navegarPara('/sorteio')
  }

  return (
    <footer>
      <button disabled={listaParticipantes.length < 3} onClick={iniciar}>Iniciar a brincadeira</button>
    </footer>
  )
}

export default Rodape
