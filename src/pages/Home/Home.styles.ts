import styled from 'styled-components'
import {motion} from 'framer-motion'

import {Theme} from '../../theme/Theme'

const Hero = styled.img`
  display: flex;
  max-width: 80%;
  margin: 2rem auto 0 auto;
`

const Content = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--main-dark);
  justify-content: space-around;
  align-items: center;
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
  max-width: 75%;
`
const Button = styled(motion.button)`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2px;
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  margin: 1.5rem 0 0 0;
  padding: 0.75rem 0;
  width: 80%;
`

export const Styled = {
  Hero,
  Content,
  Title,
  Description,
  Button
}