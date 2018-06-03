import React from 'react';
import './EventCreator.css';

const eventCreator = (props) => {
  return (
    <div className="event-modal">
      <form action="">
        <h2 className="event-modal__title">Create your event</h2>
        <label htmlFor="event-name">event name</label>
        <input type="text" name="event-name" required/>
        <label htmlFor="event-host">event host</label>
        <input type="text" name="event-host" required/>
        <label htmlFor="event-localization">event localization</label>
        <input type="text" name="event-localization" required/>
        <label htmlFor="event-description">event description</label>
        <textarea name="event-description" id="" cols="30" rows="10" required></textarea>
        <button className="btn" onSubmit={props.submit}>Submit</button>
      </form>
    </div>
  );
};

export default eventCreator;