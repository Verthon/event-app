import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';

const Event = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Navbar/>
      <div className="event">
        <h1 className="event__title">Event title</h1>
        <p className="event__description">A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
        <div className="row">
          <div className="event__col">
            <i className="fas fa-map-marker-alt"></i>
            <p className="event__location">Seattle, Washington</p>
          </div>
          <div className="event__col">
            <i className="far fa-clock"></i>
            <p className="event__time">13:00 - 15:00</p>
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
