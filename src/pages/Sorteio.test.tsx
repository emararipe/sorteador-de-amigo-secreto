import { render,screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Sorteio from './Sorteio'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

describe('página de sorteio', () => {
  const listaFake = ['Fulane', 'Beltrana', 'Cicrano']

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(listaFake)
  })

  test('todos os participantes podem serexbidos para iniciar o sorteio', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.getAllByRole('option')
    expect(opcoes).toHaveLength(listaFake.length)

    
  })
})