import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

function Lista() {
  const lista = useListaParticipantes()
  return (
    <ul>
      {lista.map((participante) => {
        <li key={participante} >{participante}</li>
      })}
    </ul>
  )
}

export default Lista