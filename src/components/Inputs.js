import styled from 'styled-components';
import {colors} from './styles/variables';

export const Label = styled.label`
  text-align: left;
  display: flex;
  align-self: flex-start;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px
`;

export const Input = styled.input`

  padding: 0 0.5rem;
  color: ${colors.RocketMetallic};
  border: 1px solid #ddd;
  margin: 1em 0;
  font-size: 1.5rem;
  width: 100%;
  height: 2em;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`;

export const Select = styled.select`
  padding: 0 0.5rem;
  color: ${colors.RocketMetallic};
  border: 1px solid #ddd;
  margin: 1em 0;
  font-size: 1.5rem;
  width: 100%;
  height: 2em;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`;

export const Textarea = styled.textarea`
  padding: 0 0.5rem;
  color: ${colors.RocketMetallic};
  border: 1px solid #ddd;
  margin: 1em 0;
  font-size: 1.5rem;
  width: 100%;
  height: auto;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`;