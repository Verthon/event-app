import styled from 'styled-components'
import { Theme } from '../../theme/Theme'

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const ContentWrapper = styled.div`
  padding: 0 2rem;
`

const Title = styled.h1`
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  color: ${({ theme }: Theme) => theme.colors.primary};;
`

const Paragraph = styled.p`
  color: ${({ theme }: Theme) => theme.colors.primary};
  margin: 0.5rem 0;
`

const ButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  padding: 0.5rem 2.5rem;
  border-radius: 2px;
`

const FacebookSignButton = styled(Button)`
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  margin: 0 1rem 0 0;
`

const GoogleSignButton = styled(Button)`
  background-color: ${({ theme }: Theme) => theme.colors.white};
  color: ${({ theme }: Theme) => theme.colors.primary};
  box-shadow: ${({ theme }: Theme) => theme.shadow.category};
`

export const Styled = {
  Logo,
  ContentWrapper,
  Title,
  Paragraph,
  ButtonWrapper,
  FacebookSignButton,
  GoogleSignButton
}