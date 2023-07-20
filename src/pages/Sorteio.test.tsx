import { render, screen, fireEvent } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Sorteio from './Sorteio'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('página de sorteio', () => {
  const listaFake = ['Fulane', 'Beltrana', 'Cicrano']

  const resultadofake = new Map ([
    ['Fulane', 'Beltrana'],
    ['Beltrana', 'Cicrano'],
    ['Cicrano', 'Fulane']
  ])

  // nesse caso o teste só passou quando eu usei a ; para separar as duas mockagens
  beforeEach(() => {
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultadofake);
    (useListaParticipantes as jest.Mock).mockReturnValue(listaFake)
  })

  test('todos os participantes podem ser exbidos para iniciar o sorteio', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.getAllByRole('option')
    expect(opcoes).toHaveLength(listaFake.length)
  })

  test('o participante sorteado é exibido', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    
    fireEvent.change(select, {
      target: {
        value: listaFake[0]
      }
    })

    const botaoSortear = screen.getByRole('button')

    fireEvent.click(botaoSortear)

    const amigoSorteado = screen.getByRole('alert')

    expect(amigoSorteado).toBeInTheDocument()
  })
})