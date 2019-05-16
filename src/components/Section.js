import styled from 'styled-components';
import {colors, media} from './styles/variables';


export const Section = styled.section`
  max-width: 1280px;
  padding: 2rem;
  ${media.tablet}{
    padding: 2rem 5rem;
  }
  ${media.ipadMini}{
    padding: 2rem;
  }
`;


export const SectionEvents = styled(Section)`
  max-width: 1280px;
  background-color: ${colors.Unbleached};
`;
