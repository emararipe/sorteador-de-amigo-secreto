import { RecoilRoot } from 'recoil'
import Lista from './Lista'
import { render, screen } from '@testing-library/react'


describe('uma lista vazia de participantes', () => {

  test('deve ser renderizada sem elementos', () => {
    render(<RecoilRoot>
      <Lista />
    </RecoilRoot>)

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})


describe('uma lista preenchida de participantes', () => {
  
  const listaFake = ['Fulane', 'Cicrane']
  test('deve ser renderizada sem elementos', () => {
    render(<RecoilRoot>
      <Lista />
    </RecoilRoot>)

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(listaFake.length)
  })
})