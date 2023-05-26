import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles/index'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return variaveis.cinzaClaro2
}

export const Card = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px ${variaveis.sombra};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${variaveis.branco};
  font-weigth: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${variaveis.cinzaEscuro};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.sombraFraca};
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
