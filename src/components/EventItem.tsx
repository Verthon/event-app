import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { EventItemType, EventItemEditMode } from '../types/events'
import { showEventDetails } from '../reducers/event'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete_forever.svg'
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg'

const EventItem = ({
  eventId,
  docId,
  title,
  host,
  localization,
  address,
  category,
  day,
  hour,
  description,
  featuredImage,
  editMode,
  deleteHandler,
  editHandler
}: EventItemType) => {
  const dispatch = useDispatch()

  const displayEventDetail = () => {
    dispatch(showEventDetails(eventData))
  }

  const formatMonth = (date: string) => {
    return dayjs(date).format('MMM')
  }
  const formatDay = (date: string) => {
    return dayjs(date).format('DD')
  }
  const eventData: EventItemType = {
    eventId: eventId,
    docId: docId,
    title: title,
    host: host,
    localization: localization,
    address: address,
    category: category,
    day: day,
    hour: hour,
    description: description,
    featuredImage: featuredImage,
    editMode: editMode
  }
  return (
    <Event onClick={() => displayEventDetail()}>
      <Link to={`/event-detail/:${eventData.docId}`}>
        <ImageWrapper>
          <Time>
            <Day>{formatDay(eventData.day)}</Day>
            <Month>{formatMonth(eventData.day)}</Month>
          </Time>
          <Image src={eventData.featuredImage + '/500x200'} alt="" />
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <Link to={`/event-detail/:${eventData.docId}`}>
          <Title>{eventData.title}</Title>
        </Link>
        <Paragraph>{eventData.localization}</Paragraph>
        <EventOptions editMode={editMode}>
          <EventOptionsAction onClick={() => deleteHandler(eventData)}><EventsOptionsDelete/></EventOptionsAction>
          <EventOptionsAction onClick={() => editHandler(eventData)}><EventsOptionsEdit/></EventOptionsAction>
        </EventOptions>
      </InfoWrapper>
    </Event>
  )
}

const Event = styled.div`
  position: relative;
  margin: 0 auto 3rem auto;
  width: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  line-height: 1;
  background-color: #f6f9f9;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  max-height: 150px;
`

const EventOptions = styled.div<EventItemEditMode>`
  margin: .5rem 0;
  display: ${props => (props.editMode ? 'flex' : 'none')};
`

const EventOptionsAction = styled.button`
  background: #fff;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem 1rem;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.1);
  border-radius: 5px;
`

const EventsOptionsEdit = styled(EditIcon)`
  #Primary-Color {
    fill: var(--ion-color-primary);
  }
  #Secondary-Color {
    fill: #fff;
  }
`

const EventsOptionsDelete = styled(DeleteIcon)`
  #Primary-Color {
    fill: hsl(350, 69%, 36%);
  }
  #Secondary-Color {
    fill: #fff;
  }
`

const Image = styled.img`
  border-radius: 10px 10px 0px 0px;
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
  top: -0.9px;
  right: -0.9px;
  width: 51px;
  height: 42px;
  background: #f6f9f9;
  border-radius: 0px 10px;
  line-height: 1;
  z-index: 1;
`

const Day = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--ion-color-primary);
`

const Month = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

const InfoWrapper = styled.div`
  margin: 0.5rem 1rem;
`

const Title = styled.h2`
  color: var(--ion-color-primary);
  margin: 0;
  font-size: 1.1rem;
  font-family: 'Signika';
  font-weight: 600;
`

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.7;
`

export default EventItem
