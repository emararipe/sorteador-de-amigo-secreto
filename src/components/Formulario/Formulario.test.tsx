import { RecoilRoot } from 'recoil'
import { act, fireEvent, render, screen } from '@testing-library/react'
import Formulario from './Formulario'

// describe agrupa os erros 
describe('o comportamento do Formulario.tsx', () => {
  test('participantes não podem ser adicionados se o input estiver vazio, ', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(botao).toBeDisabled()

  })

  test('adicionar um participante se o input estiver preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Pessoa'
      }
    })

    fireEvent.click(botao)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })


  test('a mensagem de erro para nomes duplicados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    fireEvent.change(input, {
      target: {
        value: 'Pessoa'
      }
    })

    fireEvent.click(botao)
    fireEvent.change(input, {
      target: {
        value: 'Pessoa'
      }
    })
    fireEvent.click(botao)
    // até agora, simulamos a situação que levaria ao erro

    const mensagemErro = screen.getByRole('alert')

    expect(mensagemErro.textContent).toBe('Esse nome já consta na lista. Nomes duplicados não são permitidos.')

  })

  test('a mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    fireEvent.change(input, {
      target: {
        value: 'Pessoa'
      }
    })
    fireEvent.click(botao)
    fireEvent.change(input, {
      target: {
        value: 'Pessoa'
      }
    })

    fireEvent.click(botao)
    let mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeInTheDocument()

    // quando uma ação for assíncrona, deve-se colocar ela em act
    act(() => {
      jest.runAllTimers()
    })

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
  })
})