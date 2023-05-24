import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as enuns from '../../utils/enums/Tarefa'
import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enuns.Status.PENDENTE}
            criterio="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enuns.Status.CONCLUIDA}
            criterio="status"
            legenda="concluídas"
          />
          <FiltroCard
            valor={enuns.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="urgentes"
          />
          <FiltroCard
            valor={enuns.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enuns.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
