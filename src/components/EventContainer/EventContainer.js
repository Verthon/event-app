import React from 'react';
import './EventContainer.css';

const eventContainer = (props) => {
  return (
    <div className="event-container">
      <img src="" alt="default"/>
      <time>{props.day} {props.time} </time>
      <p>{props.description}</p>
    </div>
  );
}

export default eventContainer;