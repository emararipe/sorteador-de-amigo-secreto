import { useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'

const Sorteio = () => {
  const lista: string[] = useListaParticipantes()

  const resultadoSorteio = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSorteado, setAmigoSorteado] = useState('')

  const sortear = (evento:React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const amigoSecreto = resultadoSorteio.get(participanteDaVez) 
    if(amigoSecreto)
    setAmigoSorteado(amigoSecreto)  
  }

  return (
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
          {lista.map((participante) => (
            <option  key={participante}>{participante}</option>
          ))}
        </select> 
        <button type='submit'>Sortear</button>
      </form>
      <p>{amigoSorteado}</p>
    </section>
  )
}

export default Sorteio