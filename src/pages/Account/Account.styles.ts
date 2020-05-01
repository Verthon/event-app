import styled from 'styled-components'
import {Theme} from '../../theme/Theme'

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: ${({ theme }: Theme) => theme.fontSizes.title};
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  color: ${({ theme }: Theme) => theme.colors.primary};
`

const Container = styled.div`
  padding: 1rem;
`

const Header = styled.header`
  margin: 1rem 0 3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.25rem;
`

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
`

const Email = styled.p`
  color: ${({ theme }: Theme) => theme.colors.text};
  margin: 0;
`

const EventsContainer = styled.div`
  margin: 1rem 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  padding: 0.35rem 1.25rem;
  margin: 0 1rem 0 0;
  border-radius: 2px;
  background-color: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
`

export const Styled = {
  Logo,
  HeaderWrapper,
  Title,
  Container,
  Header,
  Avatar,
  MetaContainer,
  Name,
  Email,
  EventsContainer,
  Button
}