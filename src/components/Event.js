import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {colors} from './styles/variables';
import {fadeIn} from './styles/animations';
import {withFirebase} from "./Firebase";

//Styled components

const EventContainer = styled.article`
  padding: 0 2rem;
  animation: ${fadeIn} 2s;
  color: ${colors.RocketMetallic};
  line-height: 1.6;
  font-size: 1rem;
`;

const Title = styled.h1`
  color: ${colors.ChaosBlack};
  margin: 1rem 0;
  font-size: 2.75em;
  font-family: 'Source Sans Pro';
`;

const Subtitle = styled.h2`
  font-size: 1.9rem;
  margin: 1.5rem 0 0 0;
  color: ${colors.ChaosBlack};
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Time = styled.time`
  color: ${colors.RocketMetallic};
  line-height: 1.6;
  margin-left: 0.5rem;
  font-size: 1.6em;
`;

const Location = styled.p`
  color: ${colors.RocketMetallic};
  line-height: 1.6;
  margin: 0 0 0 0.5rem;
  font-size: 1.6em;
`;

const DataContainer = styled.section`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  color: ${colors.RocketMetallic};
  line-height: 1.6;
  font-size: 1.6em;
`;

const Host = styled.strong`
  color: ${colors.ChaosBlack};
  display: block;
`;

const Category = styled.span`
  line-height: 1.7;
  background: ${colors.AlajuelaToad};
  color: ${colors.ChaosBlack};
  padding: 0 0.5rem;
  text-transform: capitalize;
`;

const Event = (props) => {
  console.log(props.firebase);
  const {title, localization, day, hour, category, description, host, featuredImage} = props.event;
  return (
    <React.Fragment>
      <Navbar/>
      <Image src={featuredImage} alt={title+" image"}/>
      <EventContainer>
        <Title>{title}</Title>
        <Subtitle>Date and time</Subtitle>
        <DataContainer>
          <i className="far fa-clock"></i>
          <Time datetime={day}>{day}, </Time>
          <Time datetime={hour}>{hour}</Time>
        </DataContainer>
        <Subtitle>Location</Subtitle>
        <DataContainer>             
          <i className="fas fa-map-marker-alt"></i>
          <Location>{localization}</Location>
        </DataContainer>
        <Subtitle>Description</Subtitle>                  
        <Description>{description}</Description>
        <Subtitle>Event host</Subtitle>
        <Host>{host}</Host>
        <Category>{category}</Category> 
      </EventContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event
  };
}

export default connect(mapStateToProps)(withFirebase(Event));
