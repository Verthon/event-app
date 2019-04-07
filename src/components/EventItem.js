import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class EventItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      event: {
        title: this.props.title,
        localization: this.props.localization,
        day: this.props.day,
        category: this.props.category,
        hour: this.props.hour,
        description: this.props.description
      }
    }
  }

  render(){
    const {title, localization, day} = this.state.event;
    return (
      <React.Fragment>
        <div className="event-item">
          <Link to={`/events/${formatLink(title)}`}>
            <h2 className="event-item__title">{title}</h2>
            <p>{localization}</p>
            <time>{day}</time>
          </Link>
          {/*<button className="btn">Learn more</button>*/}
        </div>
      </React.Fragment>     
      )
    }
}

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
}

export default EventItem;