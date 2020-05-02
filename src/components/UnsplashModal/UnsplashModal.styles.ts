import styled from 'styled-components'
import { ActionButtonProps } from '../../types/general'
import {Theme} from '../../theme/Theme'
import { ImageWrapperProps, ImageProps } from '../UnsplashModal'

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
`

const Title = styled.h2`
  color: var(--ion-color-primary);
  font-weight: 600;
  margin: 1rem 0 0 0;
`

const Label = styled.label`
  color: var(--ion-color-primary);
`

const Input = styled.input`
  margin: 0.5rem 0;
  width: 100%;
`

const Button = styled.button<ActionButtonProps>`
  background: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 2px;
  font-size: 1rem;
`

const CancelButton = styled.button<ActionButtonProps>`
  background: transparent;
  color: ${({theme}: Theme) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  font-size: 1rem;
  margin: 0 1.75rem 0 0;
`

const Description = styled.p`
  color: hsl(203, 13%, 44%);
`

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: inline-flex;
  position: relative;
  height: 100%;
  &::after {
    content: "";
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: ${props =>
      props.active
        ? 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%,rgba(45,	54,	82, 0.75) 70%)'
        : 'none'};
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
  padding: 1.5rem 0;
  background: hsl(225.4, 29.1%, 95.9%);
`

export const Styled = {
  Wrapper,
  Title,
  Input,
  Label,
  Button,
  CancelButton,
  Description,
  ImageWrapper,
  Image,
  ImagesWrapper,
  ImagesSection,
  Footer
}