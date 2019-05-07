import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {send} from '../reducers/actions';

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
        description: this.props.description,
        host: this.props.host,
        featuredImage: this.props.featuredImage
      }
    }
  }

  send = () => {
    this.props.send(this.state.event)
  }

  render(props){
    //redux dispatch
    const {title, localization, day, featuredImage} = this.props;
    return (
      <React.Fragment>
        <div className="event-item">
          <img className="event-item__image" src={featuredImage+'/500x200'} alt=""/>
          <Link to={`/events/${formatLink(title)}`} onClick={this.send}>
            <h2 className="event-item__title">{title}</h2>
            <p>{localization}</p>
            <time>{day}</time>
          </Link>
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
  featuredImage: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    send: event => dispatch(send(event))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);