import * as enums from '../utils/enums/Tarefa'
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  decricacao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    decricacao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.decricacao = decricacao
    this.id = id
  }
}

export default Tarefa
