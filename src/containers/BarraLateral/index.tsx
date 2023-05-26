import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as enuns from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Botao, Campo } from '../../styles/index'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
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
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
