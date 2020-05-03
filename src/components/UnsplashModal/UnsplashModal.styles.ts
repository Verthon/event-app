import styled, { keyframes } from 'styled-components'
import { ActionButtonProps } from '../../types/general'
import { Theme } from '../../theme/Theme'
import { ImageWrapperProps, ImageProps } from '../UnsplashModal'

const FadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`

const Pulse = keyframes`
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
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
`

const Title = styled.h2`
  color: ${({ theme }: Theme) => theme.colors.primary};
  font-weight: 600;
  margin: 1rem 0 0 0;
`

const Label = styled.label`
  color: ${({ theme }: Theme) => theme.colors.primary};
`

const Input = styled.input`
  margin: 0.5rem 0;
  width: 100%;
`

const Button = styled.button<ActionButtonProps>`
  background: ${({ theme }: Theme) => theme.colors.primary};
  color: ${({ theme }: Theme) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  font-size: 1rem;
`

const SubmitButton = styled(Button)`
  padding: 0.5rem 1.5rem;
`

const CancelButton = styled(Button)`
  background: transparent;
  color: ${({ theme }: Theme) => theme.colors.primary};
  padding: 0.5rem 1.5rem;
  margin: 0 1.75rem 0 0;
`

const Description = styled.p`
  color: hsl(203, 13%, 44%);
`

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: inline-flex;
  position: relative;
  height: 100%;
  border: ${({ active, theme }) => active ? `3px solid ${theme.colors.primary}` : 'none'};
  padding: ${({ active }) => active ? `1rem` : '0'};
  animation-name: ${({ active }) => active ? FadeInUp : 'none'};
  animation-duration: 0.5s;
  &::after {
    content: "";
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    
    /* background: ${props =>
    props.active
      ? 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%,rgba(45,	54,	82, 0.75) 70%)'
      : 'none'};
   */
}
`

const Image = styled.img<ImageProps>`
  max-width: 100%;
`

const ImagesWrapper = styled.div`
  overflow-y: auto;
`

const ImagesSection = styled.section``

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: .75rem 0;
  background: hsl(225.4, 29.1%, 95.9%);
`

const ErrorMessage = styled.span`
  animation-name: ${Pulse};
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

const InfoMessage = styled.span`
  animation-name: ${Pulse};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  background: hsl(225.4,29.1%,90.9%);
  color: ${({ theme }: Theme) => theme.colors.primary};
  font-style: italic;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-left: ${({ theme }: Theme) => `4px solid ${theme.colors.primary}`};
  font-size: 0.875rem;
  margin: 1rem 0 0 0;
`

export const Styled = {
  Wrapper,
  Title,
  Input,
  Label,
  Button,
  CancelButton,
  SubmitButton,
  Description,
  ImageWrapper,
  Image,
  ImagesWrapper,
  ImagesSection,
  Footer,
  ErrorMessage,
  InfoMessage
}