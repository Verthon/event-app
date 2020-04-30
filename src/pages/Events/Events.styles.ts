import styled from 'styled-components'
import { Theme } from '../../theme/Theme'

const Logo = styled.img`
  width: ${({ theme }: Theme) => theme.logo.width};
  margin: ${({ theme }: Theme) => `${theme.spacing.sm} ${theme.spacing.sm}`};
`

const Title = styled.h1`
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  font-size: ${({ theme }: Theme) => theme.fontSizes.title};
  color: ${({ theme }: Theme) => theme.colors.primary};
  margin: ${({ theme }: Theme) => theme.spacing.title};
`

const CategoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: ${({ theme }: Theme) => `${theme.spacing.md} ${theme.spacing.xxs}`};
`

export const Styled = {
  Logo,
  Title,
  CategoriesWrapper
}