import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      'Revisar as Aulas de ES6+',
      1
    ),
    new Tarefa(
      'Estudar Next.js',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Inicar aulas em 25/08/23',
      2
    ),
    new Tarefa(
      'Node.js',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Inicar aulas em 06/09/23',
      3
    ),
    new Tarefa(
      'Estudar Tailwind Css',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      'Inicar aulas em 05/01/24',
      4
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Revisão de todas as aulas',
      5
    ),
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Revisão store',
      6
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Revisar',
      7
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remove } = tarefasSlice.actions

export default tarefasSlice.reducer
