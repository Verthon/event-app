import React from 'react';
import {Link} from 'react-router-dom';


const Event = (props) => {
  console.log(props);
  return (
    <div className="event">
      <h1>Test</h1>
      <Link to="/"><button className="btn">HOMEPAGE</button></Link>
    </div>
  );
}

export default Event;