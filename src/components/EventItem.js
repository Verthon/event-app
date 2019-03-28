import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import Event from './Event';
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
        {this.state.show ? <Event data={this.props}/> : null}
        <div className="event-container">
          <h1>{this.props.title}</h1>
          <p>{this.props.localization}</p>
          <time>{this.props.day} {this.props.hour} </time>
          <strong>{this.props.host}</strong>
          <p>{this.props.category}</p>
          <Link to={`/events/${formatLink(this.props.title)}`}><button className="btn">Learn more</button></Link>
        </div>
      </React.Fragment>     
      )
    }
}

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
}

export default EventItem;