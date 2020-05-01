import styled from 'styled-components'
import { Theme } from '../../theme/Theme'
import { ReactComponent as Icon } from '../../assets/illustrations/check_mark.svg'

const Wrapper = styled.div`
  padding: 1rem 2rem;
`

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const CheckIcon = styled(Icon)`
  padding: 0 2rem;
  .secondary-color-gradient {
    stop-color: ${({ theme }: Theme) => theme.colors.active} !important;
  }
  .secondary-color {
    fill: ${({ theme }: Theme) => theme.colors.active};
  }
  .primary-sketch {
    fill: ${({ theme }: Theme) => theme.colors.primary};
  }
  .secondary-sketch {
    fill: ${({ theme }: Theme) => theme.colors.primary};
  }
`

const Title = styled.h1`
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  font-size: 1.5rem;
`

const Button = styled.button`
  display: block;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  font-size: 1rem;
  border-radius: 2px;
  width: 100%;
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  padding: 0.75rem;
  margin: 1rem auto;
`

export const Styled = {
  Wrapper,
  Logo,
  CheckIcon,
  Title,
  Button
}