import React from 'react';
import './AddEventBtn.css';

const addEventBtn = (props) => {
  return (
    <button className="btn" onClick={props.showModal}>Add event</button>
  );
}

export default addEventBtn;