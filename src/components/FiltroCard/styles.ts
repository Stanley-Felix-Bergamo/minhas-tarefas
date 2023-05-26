import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.azul : variaveis.cinzaClaro)};
  background-color: ${(props) =>
    props.ativo ? variaveis.branco : variaveis.branco2};
  color: ${(props) => (props.ativo ? variaveis.azul : variaveis.cinza2)};
  border-radius: 8px;
  cursor: pointer;
`

export const Contator = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
