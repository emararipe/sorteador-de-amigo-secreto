import { useListaParticipantes } from "../state/hooks/useListaParticipantes"

const Rodape = () => {
  const listaParticipantes = useListaParticipantes()

  return (
    <footer>
      <button disabled={listaParticipantes.length < 3}>Iniciar a brincadeira</button>
    </footer>
  )
}

export default Rodape
