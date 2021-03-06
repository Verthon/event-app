import styled from 'styled-components'
import {Theme} from '../../theme/Theme'

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Title = styled.h1`
  margin-top: 0;
  color: ${({ theme }: Theme) => theme.fontWeights.bold};
  padding: 0 1rem;
`

const Description = styled.p`
  color: ${({ theme }: Theme) => theme.colors.text};
  padding: 0 1rem;
`

export const Styled = {
  Logo,
  Title,
  Description
}