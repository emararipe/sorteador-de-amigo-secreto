import { RecoilRoot } from 'recoil'
import Lista from './Lista'
import { render, screen } from '@testing-library/react'
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'

//precisamos simular o comportamento da lista em diferentes situações, vamos usar o mock para isso 
jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

describe('uma lista vazia de participantes', () => {
  //como vamos simular antes do teste acontecer, vamos usar o beforeEach
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <Lista />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})


describe('uma lista preenchida de participantes', () => {
  const listaFake = ['Fulane', 'Cicrane']

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(listaFake)
  })

  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <Lista />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(listaFake.length)
  })
})