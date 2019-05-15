import React from 'react';
import styled from 'styled-components';
import {colors} from './styles/variables';
import {spin} from './styles/animations';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Spinner = styled.div`
  display: block;
  width: 75px;
  height: 75px;
  border: 3px solid rgba(0,0,0,.25);
  border-radius: 50%;
  border-top-color: ${colors.Blackout};
  animation: ${spin} 1.5s ease-in-out infinite;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Spinner></Spinner>
    </Wrapper>
  )
}

export default Loader;