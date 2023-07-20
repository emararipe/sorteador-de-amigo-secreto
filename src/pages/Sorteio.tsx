import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

const Sorteio = () => {
  const lista: string[] = useListaParticipantes()
  return (
    <section>
      <form>
        {lista.map((participante) => (
          <option key={participante}>{participante}</option>
        ))}
      </form>
    </section>
  )
}

export default Sorteio