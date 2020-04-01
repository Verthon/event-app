import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { EventType } from '../types/events'
import { showEventDetails } from '../reducers/event'

const EventItem = (props: any) => {
  const dispatch = useDispatch()

  const displayEventDetail = (e: any) => {
    //e.preventDefault()
    dispatch(showEventDetails(eventData))
  }

  const formatDay = (timestamp: any) => {
    timestamp = parseInt(timestamp)
    return dayjs.unix(timestamp).format('DD')
  }
  const formatMonth = (timestamp: any) => {
    timestamp = parseInt(timestamp)
    return dayjs.unix(timestamp).format('MMM')
  }
  const eventData: EventType = {
    eventId: props.eventId,
    docId: props.docId,
    name: props.name,
    host: props.host,
    localization: props.localization,
    address: props.address,
    category: props.category,
    date: props.date,
    time: props.time,
    description: props.description,
    image: props.image,
    timestamp: props.timestamp,
  }
  return (
    <Event onClick={e => displayEventDetail(e)}>
      <Link to={`/event-detail/:${eventData.docId}`}>
        <ImageWrapper>
          <Time>
            <Day>{formatDay(eventData.timestamp)}</Day>
            <Month>{formatMonth(eventData.timestamp)}</Month>
          </Time>
          <Image src={eventData.image + '/500x200'} alt="" />
        </ImageWrapper>
      </Link>
      <InfoWrapper>
        <Link to={`/event-detail/:${eventData.docId}`}>
          <Title>{eventData.name}</Title>
        </Link>
        <Paragraph>{eventData.localization}</Paragraph>
      </InfoWrapper>
    </Event>
  )
}

const Event = styled.div`
  position: relative;
  margin: 1rem auto;
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
  padding-bottom: 39.99%;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px 10px 0px 0px;
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
