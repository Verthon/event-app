import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";
import {Btn} from './Button';
import {colors} from './styles/variables';
import conference_speaker from '../assets/images/conference_speaker.svg';


const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-image: url(${conference_speaker});
  background-size: contain;
  height: 30rem;
  background-repeat: no-repeat;
  background-position-x: 8px;
  background-position-y: 5px;
  background-color: ${colors.Unbleached};
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-size: 2em;
  margin: 0.5rem 0 0 0;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
  justify-content: flex-end;
`;

const Hero = (props) => {
  return(
    <HeroWrapper>
      <Title>{props.title}</Title>
      <Content>
        <Link to="/create-event">
          <Btn>Add event</Btn>
        </Link>
      </Content>  
    </HeroWrapper>
  )
}

export default Hero;