import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';
import styled, {keyframes} from 'styled-components';
import {Row} from './styles/components';
import {colors} from './styles/variables';

//Styled components

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const EventContainer = styled.article`
  padding: 0 2rem;
  animation: ${fadeIn} 2s;
  color: ${colors.RocketMetallic};
  line-height: 1.6;
`;

const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.75rem;
  font-family: 'Source Sans Pro';
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin: 1.5rem 0 0 0;
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
`;

const Location = styled.p`
  color: ${colors.RocketMetallic};
  line-height: 1.6;
  margin-left: 0.5rem;
`

const DataContainer = styled.section`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`

const Description = styled.p`
  margin: 0.5rem 0;
  color: ${colors.RocketMetallic};
  line-height: 1.6;
`

const Host = styled.strong`
  color: ${colors.ChaosBlack}
  display: block;
  margin: 1rem 0;
`;

const Event = (props) => {
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
              <Time daytime={day}>{day}, </Time>
              <Time daytime={hour}>{hour}</Time>
            </DataContainer>
            <Subtitle>Location</Subtitle>
            <DataContainer>             
              <i className="fas fa-map-marker-alt"></i>
              <Location>{localization}</Location>
            </DataContainer>
            <Subtitle>Description</Subtitle>                  
            <Description>{description}</Description>
            <Host>{host}</Host>
            <span className="event__cat">{category}</span> 
        </EventContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    event: state.event
  };
}

export default connect(mapStateToProps)(Event);
