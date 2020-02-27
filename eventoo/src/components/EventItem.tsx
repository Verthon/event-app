import React from 'react'
import styled from 'styled-components'
import { EventModel } from '../interfaces'

const EventItem = (props: any) => {
  const eventData: EventModel = {
    name: props.name,
    host: props.host,
    localization: props.localization,
    category: props.category,
    date: props.date,
    time: props.time,
    description: props.description,
    image: props.image,
  }
  console.log('event item props', props)
  return (
    <Event>
      <Image src={eventData.image + '/500x200'} alt="" />
      <Time>{eventData.date}</Time>
      <Title>{eventData.name}</Title>
      <Paragraph>{eventData.localization}</Paragraph>
    </Event>
  )
}

const Event = styled.div`
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  width: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  line-height: 1.7;
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-family: 'Signika';
  font-weight: 600;
`

const Image = styled.img`
  border-radius: 5px;
`

const Time = styled.time``

const Paragraph = styled.p`
  margin: 0;
  color: #4a4a4b;
`

export default EventItem
