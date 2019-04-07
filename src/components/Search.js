import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <div className="searchbox">
      <input
        className="input input--search"
        type="search"
        name="eventSearch"
        id="eventSearch"
        placeholder="Search"
        value={props.query}
        onChange={props.changed}
      />
    </div>
  )
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default Search;