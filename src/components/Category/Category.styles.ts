import styled from 'styled-components'
import { CategoryStyledProps } from '../../types/categories'
import { Theme } from '../../theme/Theme'

const CategoryWrapper = styled.button<CategoryStyledProps>`
  min-width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }: Theme) => `${theme.spacing.md} ${theme.spacing.md}`};
  border-radius: ${({theme}: Theme ) => theme.border.defaultRadius};
  background-color: ${({active, theme} ) => (active ? theme.colors.active : theme.colors.secondary)};
  box-shadow: ${({theme}: Theme ) => theme.shadow.category}
`

const IconWrapper = styled.div<CategoryStyledProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  width: 45px;
  margin: ${({ theme }: Theme) => `${theme.spacing.sm} 0 0 0`};
`

const Icon = styled.span`
  font-size: 1.5rem;
`

const Name = styled.p<CategoryStyledProps>`
  color: ${({theme}: Theme ) => theme.colors.primary};
  font-size: ${({theme}: Theme ) => theme.fontSizes.small};
  margin: ${({ theme }: Theme) => `0 0 ${theme.spacing.sm} 0`};
`

export const Styled = {
  Name,
  Icon,
  IconWrapper,
  CategoryWrapper
}