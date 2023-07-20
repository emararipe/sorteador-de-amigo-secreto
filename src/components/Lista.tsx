import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

const Lista = () => {
  const lista:string[] = useListaParticipantes()
  return (
    <ul>
      {lista.map((participante) => {
        <li key={participante} >{participante}</li>
      })}
    </ul>
  )
}

export default Lista