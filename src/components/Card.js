import React from 'react';
import styled from 'styled-components';
import {colors, media} from './styles/variables';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 5rem auto;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.05);
  justify-items: center;
  align-items: center;
  background: ${colors.White};
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  ${media.tablet}{
    max-width: 60%;
  }
`;

const Title = styled.h3`
  margin: 1rem 0;
  font-size: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faf8f5;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
`;

const Icon = styled.i`
  margin: 1rem 0;
  font-size: 3rem; 
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0.25rem;
  color: ${colors.RocketMetallic}
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Icon className={props.class}></Icon>
      </IconWrapper>    
      <Title>{props.title}</Title>
      <Paragraph>{props.text}</Paragraph>
    </CardWrapper>
  )
}

export default Card;