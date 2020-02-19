import React from 'react'
import { EventModel } from '../interfaces'

const EventItem = ({ event }: any) => {
  const eventData: EventModel = {
    name: event.title,
    host: event.host,
    localization: event.localization,
    category: event.category,
    date: event.category,
    time: event.time,
    description: event.description,
    image: event.image,
  }
  return (
    <div className="event-item">
      <img className="event-miniature" src={event.image} alt="" />
      <h3 className="event-item__title">{eventData.name}</h3>
      <p className="event-item__text">{eventData.description}</p>
      <time className="event-time">{eventData.time}</time>

    </div>
  )
}

export default EventItem
