import styled from 'styled-components'
import { Theme } from '../../theme/Theme'

const Button = styled.button`
  display: block;
  ${({ theme }: Theme) => theme.fontWeights.bold};
  ${({ theme }: Theme) => theme.fontSizes.regular};
  border-radius: 2px;
  width: 90%;
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  padding: 0.75rem;
  margin: 1rem auto;
`

const ErrorMessage = styled.span`
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    50% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    100% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  background: hsl(0, 91%, 95%);
  color: hsl(0, 41%, 40%);
  font-style: italic;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-left: 4px solid hsl(0, 41%, 40%);
  font-size: 0.875rem;
`

export const Styled = {
  Button,
  ErrorMessage
}
