import { funcaoSortear } from "./funcaoSortear"

describe('é feito um sorteio', () => {
  test('o sorteador não pode sortear a si mesmo', () => {
    const listaFake = ['Fulane', 'Beltrana', 'Cicrano', 'Beltrane', 'Fulano']

    const mapaFakeSorteio = funcaoSortear(listaFake)

    listaFake.forEach(participante => {
      const amigoScreto = mapaFakeSorteio.get(participante)
      expect(amigoScreto).not.toEqual(participante)
    })

  })
})