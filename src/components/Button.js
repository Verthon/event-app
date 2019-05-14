import styled from 'styled-components';
import {slideDown} from './styles/animations';
import {colors} from './styles/variables';

  export const Button = styled.button`
    border: 0;
    background: ${colors.AlajuelaToad};
    color: #fff;
    padding: 0.5em 2em;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
    animation: ${slideDown} ease-out 0.5s;
  `;

  export const LargeButton = styled(Button)`
    font-size: 1.75rem;
  `