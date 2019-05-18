import styled from 'styled-components';
import {colors, media} from './styles/variables';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

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

export const DatePicker = styled(DayPickerInput)`
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

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.ipadMini}{
    margin: auto;
    width: 70%;
  }
`;

export const Filter = styled.select`
  box-shadow: 0 1px 2px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.05);
  height: 2.75em;
  border: 0;
  width: 45%;
  color: ${colors.RocketMetallic};
  font-size: 1em;
  padding: 0 0.5rem;
`;
