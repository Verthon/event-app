import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  console.log(props);
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

}

export default Search;