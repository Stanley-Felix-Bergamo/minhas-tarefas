import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Redux',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Redux'
    },
    {
      id: 2,
      descricao: 'Estudar NEXT.js',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Next.js'
    },
    {
      id: 3,
      descricao: 'Revisar Typescript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Typescript'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe um nome com essa tarefa')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
