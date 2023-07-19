import { RecoilRoot } from 'recoil'
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";


test('participantes não podem ser adicionados se o input estiver vazio, ', () => {

  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  const botao = screen.getByRole('button')

  expect(input).toBeInTheDocument()

  expect(botao).toBeDisabled()

})

test('adicionar um participante se o input estiver preenchido', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  const botao = screen.getByRole('button')

  fireEvent.change(input, {
    target: {
      value: 'Pessoa'
    }
  })

  fireEvent.click(botao)

  expect(input).toHaveFocus()
  expect(input).toHaveValue("")
})