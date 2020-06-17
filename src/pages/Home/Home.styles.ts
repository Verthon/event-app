import styled from 'styled-components'
import bg from '../../assets/backgrounds/main-bg-sm.svg'
import {Theme} from '../../theme/Theme'

const Hero = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 75%;
  justify-content: flex-end;
  background-position: center 15%;
`

const Content = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--main-dark);
  justify-content: flex-end;
  align-items: flex-start;
  margin: auto auto 0 auto;
  padding: 0 2rem 2.75rem 2rem;
  background: ${({ theme }: Theme) => theme.colors.white};
  max-width: 100%;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 1.75rem;
  margin: 2rem 0 0 0;
`
const Description = styled.p`
  margin: 0.25rem 0;
`
const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2px;
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  margin: 1.5rem 0 0 0;
  padding: 0.75rem 0;
  width: 100%;
`

export const Styled = {
  Hero,
  Content,
  Title,
  Description,
  Button
}