import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

const Sorteio = () => {
  const lista: string[] = useListaParticipantes()
  return (
    <form>
      {lista.map((participante) => (
        <option key={participante}>{participante}</option>
      ))}
    </form>
  )
}

export default Sorteio