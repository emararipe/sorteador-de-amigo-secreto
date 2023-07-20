import { useSetRecoilState } from "recoil"
import { useListaParticipantes } from "./useListaParticipantes"
import { resultadoSorteioState } from "../atom"
import { funcaoSortear } from "../helpers/funcaoSortear"

export const useSortear = () => {
  const lista =  useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoSorteioState)
  return() => {
    const resultado = funcaoSortear(lista)
    setResultado(resultado)
  }
}