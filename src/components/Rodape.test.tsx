import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { render, screen } from "@testing-library/react"

describe('quando não existem participantes suficientes', () => {
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