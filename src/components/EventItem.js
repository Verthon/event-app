import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class EventItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="event-item">
          <Link to={`/events/${formatLink(this.props.title)}`}>
            <h2 className="event-item__title">{this.props.title}</h2>
            <p>{this.props.localization}</p>
            <time>{this.props.day} {this.props.hour} </time>
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