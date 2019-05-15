import styled from 'styled-components';
import {colors} from './styles/variables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border: 1px solid ${colors.AlajuelaToad};
  border-radius: 50%;
  max-width: 75px;
`;

export const Name = styled.strong`
  color: ${colors.ChaosBlack};
  font-family: 'Source Sans Pro';
  margin: 1rem 0;
  font-size: 2.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  color: ${colors.RocketMetallic};
  margin: 0 0 0.5rem 0;
`;