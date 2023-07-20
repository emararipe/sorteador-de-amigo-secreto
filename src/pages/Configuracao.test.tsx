import Configuracao from './Configuracao'
import { RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
      const { container } = render(<RecoilRoot>
          <Configuracao />
      </RecoilRoot>)

      expect(container).toMatchSnapshot()
  })
})
