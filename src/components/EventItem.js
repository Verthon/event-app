import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const EventItem = (props) => {
  return (
      <React.Fragment>
        <div className="event-container">
          <h1>{props.title}</h1>
          <p>{props.localization}</p>
          <time>{props.day} {props.hour} </time>
          <strong>{props.host}</strong>
          <p>{props.category}</p>
          <Link to={"/events/" + formatLink(props.title)}><button className="btn">Learn more</button></Link>
        </div>        
      </React.Fragment>
  )
}

EventItem.propTypes = {
  title: PropTypes.string,
  localization: PropTypes.string,
  host: PropTypes.string,
  category: PropTypes.string,
  day: PropTypes.string,
  hour: PropTypes.string,
}

export default EventItem;