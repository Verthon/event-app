import React from 'react';
import './Event.css';

const event  = (props) => {
  return(
    <section>
      <img src={props.img} alt=""/>
      <h1>test</h1>
      <button onClick={props.closed}>Close</button>
    </section>  
  );
};

export default event;