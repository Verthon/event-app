import React from 'react';
import './EventContainer.css';

const eventContainer = (props) => {
  return (
    <div className="event-container">
      <img src="" alt="default"/>
      <h2>{props.name}</h2>
      <p>{props.localization}</p>
      <i>{props.host}</i>
      <time>{props.day} {props.hour} </time>
      <p>{props.description}</p>
    </div>
  );
}

export default eventContainer;