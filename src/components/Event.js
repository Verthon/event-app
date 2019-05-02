import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';

const Event = (props) => {
  
  const {title, localization, day, hour, category, description, host, featuredImage} = props.event;
  return (
    <React.Fragment>
      <Navbar/>
      <div className="event">
        <h1 className="event__title">{title}</h1>
        <img src={featuredImage} alt="" className="event__image"/>
        <p className="event__description">{description}</p>
        <p>Host: {host}</p>
        <div className="row">
          <div className="event__col">
            <i className="fas fa-map-marker-alt"></i>
            <p className="event__location">{localization}</p>
          </div>
          <div className="event__col">
            <i className="far fa-clock"></i>
            <p className="event__time">{hour}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event
  };
}

export default connect(mapStateToProps)(Event);
