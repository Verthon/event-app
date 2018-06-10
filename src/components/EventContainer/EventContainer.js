import React from 'react';
import './EventContainer.css';

const eventContainer = (props) => {
  return (
    <li className="event-container">
      <img src="" alt="default"/>
      <h2>{props.title}</h2>
      <p>{props.localization}</p>
      <i>{props.host}</i>
      <time>{props.date}</time>
      <p>{props.description}</p>
      <p>category: {props.category}</p>
    </li>
  );
}

export default eventContainer;