import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';
import styled from 'styled-components';

//Styled components

const EventContainer = styled.article`
  
`

const Event = (props) => {
  const {title, localization, day, hour, category, description, host, featuredImage} = props.event;
  return (
    <React.Fragment>
      <Navbar/>
      <img src={featuredImage} alt="" className="event__image"/>
      <article className="event">
        <h1 className="event__title">{title}</h1>
        <header className="row event__info">
          <div className="event__col">
            <p className="event__text">{day}</p>
          </div>
          <div className="event__col">
            <span className="event__cat">{category}</span>
          </div>
                      
        </header>
        <div className="row event__row">
          <div className="event__col">
            <i className="fas fa-map-marker-alt"></i>
            <p className="event__location">{localization}</p>
          </div>
          <div className="event__col">
            <i className="far fa-clock"></i>
            <time className="event__time" daytime={hour}>{hour}</time>
          </div>
        </div>
        <p className="event__description">{description}</p>
        <p className="event__description">{host}</p>
        
        
      </article>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event
  };
}

export default connect(mapStateToProps)(Event);
