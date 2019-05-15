import React from 'react';
import styled from 'styled-components';
import {colors, fonts, media} from './styles/variables'; 


const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: ${props => props.show ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Body = styled.article`
  position: absolute;
  display: ${props => props.show ? "flex" : "none"};
  width: 80%;
  height: auto;
  background: ${colors.White};
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 2rem 0;

  ${media.tablet}{
    width: 60%;
    padding: 3rem;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border: 0;
  background: transparent;
  font-size: 1.75rem;
  font-weight: bold;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 3rem 0 0 0;
  font-family: ${fonts.decorative};
`;

const Paragraph = styled.p`
  padding: 1rem 2rem 2rem 2rem;
  font-size: 1.5rem;
  color: ${colors.RocketMetallic};
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Modal = (props) => {

    const {show, close, title, description} = props;
    return(
      <Backdrop show={show} onClick={close}>
        <Body show={show}>
          <Close onClick={close}>x</Close>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
          <Footer>
            {props.children}
          </Footer>         
        </Body>
      </Backdrop>
    );

  }
export default Modal;