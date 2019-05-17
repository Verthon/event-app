import styled from 'styled-components';
import {colors, media} from './variables';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex: 100%;
  ${media.ipadMini}{
    flex: 50%;
  }
`;

export const CreatorModal = styled.div`
  padding: 1rem;
  background: ${colors.White};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  border-radius: 5px;
  font-size: 1.6rem;
  ${media.tablet}{
    padding: 2rem;
  }
  ${media.ipadMini}{
    max-width: 90%;
  }
`;