import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { formatMonth, formatDay } from '../../helpers/date'
import { EventItemType } from '../../types/events'
import { showEventDetails } from '../../reducers/event'
import { Styled } from './EventItem.styles'

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
    <Styled.Event onClick={() => displayEventDetail()}>
      <Link to={`/event-detail/:${eventData.docId}`}>
        <Styled.ImageWrapper>
          <Styled.Time>
            <Styled.Day>{formatDay(eventData.day)}</Styled.Day>
            <Styled.Month>{formatMonth(eventData.day)}</Styled.Month>
          </Styled.Time>
          <Styled.Image src={eventData.featuredImage + '/500x200'} alt="" />
        </Styled.ImageWrapper>
      </Link>
      <Styled.InfoWrapper>
        <Link to={`/event-detail/:${eventData.docId}`}>
          <Styled.Title>{eventData.title}</Styled.Title>
        </Link>
        <Styled.Paragraph>{eventData.localization}</Styled.Paragraph>
        <Styled.EventOptions editMode={editMode}>
          <Styled.EventOptionsAction onClick={() => deleteHandler(eventData)}>
            <Styled.EventsOptionsDelete />
          </Styled.EventOptionsAction>
          <Styled.EventOptionsAction onClick={() => editHandler(eventData)}>
            <Styled.EventsOptionsEdit />
          </Styled.EventOptionsAction>
        </Styled.EventOptions>
      </Styled.InfoWrapper>
    </Styled.Event>
  )
}

export default EventItem
