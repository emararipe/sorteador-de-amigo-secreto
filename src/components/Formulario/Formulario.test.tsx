import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

// Jest

test('participantes não podem ser adicionados se o input estiver vazio, ', () => {

    render(<Formulario />)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(botao).toBeDisabled()

})