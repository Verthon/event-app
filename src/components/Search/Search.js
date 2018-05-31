import React from 'react';
import './Search.css';

const search = (props) => {
  return(
    <div className="searchbox">
    <h2 className="searchbox__title">Find your event</h2>
    <label htmlFor="eventSearch" aria-hidden="true">Search for event</label>
    <input type="search" name="eventSearch" id="eventSearch" onChange={props.changed}/>
    </div>
  ); 
};

export default search;