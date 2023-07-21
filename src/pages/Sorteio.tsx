import { useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'
import Card from '../components/Card/Card'

const Sorteio = () => {
  const lista: string[] = useListaParticipantes()

  const resultadoSorteio = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSorteado, setAmigoSorteado] = useState('')

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    if (resultadoSorteio.has(participanteDaVez)) {
      setAmigoSorteado(resultadoSorteio.get(participanteDaVez)!)
    }
  }

  return (
    <Card>

      <section>
        <form onSubmit={evento => sortear(evento)}>
          <select
            name='participanteDaVez'
            id='participanteDaVez'
            placeholder='Selecione o seu nome'
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
            required
          >
            <option>Selecione o seu nome</option>
            {lista.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button>Sortear</button>
        </form>
        {amigoSorteado && <p role='alert'>{amigoSorteado}</p>}
      </section>
    </Card>
  )
}

export default Sorteio