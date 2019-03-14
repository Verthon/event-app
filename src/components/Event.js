import React from 'react';

const Event = (props) => {
  return (
    
    <div className="event-container">
      <h1>{props.title}</h1>
      <p>{props.localization}</p>
      <time>{props.day} {props.hour} </time>
      <strong>{props.host}</strong>
      <button className="btn">Learn more</button>
    </div>
  )
}

export default Event;