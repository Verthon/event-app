import React from 'react';
import './EventContainer.css';

const eventContainer = (props) => {
  return (
    <div className="event-container">
      <img src={props.img} alt="default"/>
      <h2>{props.title}</h2>
      <p>{props.localization}</p>
      <i>{props.host}</i>
      <time>{props.date}</time>
      <time>{props.time}</time>
      <p>{props.description}</p>
      <p>category: {props.category}</p>
      <button className="btn" onClick={props.edit}>edit</button>
      <button className="btn" onClick={props.delete}>delete</button>
    </div>
  );
}

export default eventContainer;