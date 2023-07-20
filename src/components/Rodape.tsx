import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import { useSortear } from "../state/hooks/useSortear"

const Rodape = () => {
  const listaParticipantes = useListaParticipantes()
  const navegarPara = useNavigate()
  const sortear = useSortear()

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer>
      <button disabled={listaParticipantes.length < 3} onClick={iniciar}>Iniciar a brincadeira</button>
    </footer>
  )
}

export default Rodape
