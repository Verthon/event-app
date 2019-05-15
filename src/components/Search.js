import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors, media} from './styles/variables';

const SearchWrapper = styled.div`
  margin: 2rem auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.White};
  ${media.ipadMini}{
    width: 70%;
  }
  
`;

const SearchInput = styled.input`
  padding: 0 0.5em;
  color: ${colors.BasaltGrey};
  font-size: 1em;
  width: 100%;
  height: 2.75em;
  margin: 0;
  border: 0;
  border-radius: 3px;
  
`;

const Search = (props) => {
  return (
    <SearchWrapper>
      <SearchInput
        type="search"
        name="eventSearch"
        id="eventSearch"
        placeholder="Search"
        value={props.query}
        onChange={props.changed}
      />
    </SearchWrapper>
  )
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default Search;