import { useRecoilValue } from 'recoil'
import { listaParticipantesState } from '../atom'

export const useListaParticipantes = ():string[] => {
  const lista = useRecoilValue(listaParticipantesState)
  return lista
}

