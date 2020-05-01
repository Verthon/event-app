import styled from 'styled-components'
import { EventItemEditMode } from '../../types/events'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete_forever.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import {Theme} from '../../theme/Theme'

const Event = styled.div`
  position: relative;
  margin: 0 auto 3rem auto;
  width: auto;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }: Theme) => theme.shadow.default};
  border-radius: ${({ theme }: Theme) => theme.border.defaultRadius};
  line-height: 1;
  background-color: ${({ theme }: Theme) => theme.colors.secondary};
  max-width: 400px;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  max-height: 150px;
`

const EventOptions = styled.div<EventItemEditMode>`
  margin: .5rem 0;
  display: ${({editMode}) => (editMode ? 'flex' : 'none')};
`

const EventOptionsAction = styled.button`
  background: ${({ theme }: Theme) => theme.colors.white};
  margin: 0 0.5rem 0 0;
  padding: 0.5rem 1rem;
  box-shadow: ${({ theme }: Theme) => theme.shadow.default};
  border-radius: 5px;
`

const EventsOptionsEdit = styled(EditIcon)`
  #Primary-Color {
    fill: ${({ theme }: Theme) => theme.colors.primary};
  }
  #Secondary-Color {
    fill: ${({ theme }: Theme) => theme.colors.white};
  }
`

const EventsOptionsDelete = styled(DeleteIcon)`
  #Primary-Color {
    fill: ${({ theme }: Theme) => theme.colors.warning};
  }
  #Secondary-Color {
    fill: ${({ theme }: Theme) => theme.colors.white};
  }
`

const Image = styled.img`
  border-radius: ${({ theme }: Theme) => `${theme.border.defaultRadius} ${theme.border.defaultRadius} 0 0`};
  object-fit: cover;
`

const Time = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: -1px;
  right: -1px;
  width: 51px;
  height: 42px;
  background: ${({ theme }: Theme) => theme.colors.secondary};
  border-radius:  ${({ theme }: Theme) => `0 ${theme.border.defaultRadius}`};
  line-height: 1;
  z-index: 1;
`

const Day = styled.p`
  margin: 0;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  font-size: ${({ theme }: Theme) => theme.fontSizes.regular};
  color: ${({ theme }: Theme) => theme.colors.primary};
`

const Month = styled.p`
  margin: 0;
  font-size: ${({ theme }: Theme) => theme.fontSizes.small};
`

const InfoWrapper = styled.div`
  margin: ${({ theme }: Theme) => `${theme.spacing.sm} ${theme.spacing.md}`};
`

const Title = styled.h2`
  color: ${({ theme }: Theme) => theme.colors.primary};
  margin: 0;
  font-size: 1.1rem;
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
`

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.5;
`

export const Styled = {
  Event,
  ImageWrapper,
  EventOptions,
  EventOptionsAction,
  EventsOptionsEdit,
  EventsOptionsDelete,
  Image,
  Time,
  Day,
  Month,
  InfoWrapper,
  Title,
  Paragraph
}