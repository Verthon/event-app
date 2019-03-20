import React from 'react';
import {Link} from 'react-router-dom';
import {formatLink} from '../helpers';

const EventItem = (props) => {
  return (
    
    <div className="event-container">
      <h1>{props.title}</h1>
      <p>{props.localization}</p>
      <time>{props.day} {props.hour} </time>
      <strong>{props.host}</strong>
      <p>{props.category}</p>
      <Link to={"/event/" + formatLink(props.title)}><button className="btn">Learn more</button></Link>
    </div>
  )
}

export default EventItem;