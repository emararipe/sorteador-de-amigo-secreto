import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { fireEvent, render, screen } from "@testing-library/react"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockNavigate = jest.fn()

//para a mockagem passando uma função 
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  
  test('o sorteio não pode ser iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes', () => {
  const listaFake = ['Fulane', 'Beltrana', 'Cicrano']

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(listaFake)
  })

  test('o sorteio pode ser iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })

  test('o sorteio foi iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    
    fireEvent.click(botao)

    expect(mockNavigate).toHaveBeenCalled()
  })
})