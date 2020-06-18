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

export const Styled = {
  Button
}
