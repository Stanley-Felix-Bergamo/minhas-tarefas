import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exibeResultadoDaFiltragem = (quantidade: number) => {
    let msg = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e"${termo}"` : ''

    if (criterio === 'todas') {
      msg = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      msg = `${quantidade} tarefa(s) encontrada(s) como:"${`${criterio}=${valor}`}" ${complementacao} `
    }
    return msg
  }
  const tarefas = filtrarTarefas()
  const mensagem = exibeResultadoDaFiltragem(tarefas.length)

  return (
    <S.Container>
      <S.Resultado>{mensagem}</S.Resultado>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}
export default ListaDeTarefas
