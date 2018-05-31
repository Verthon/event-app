import React from 'react';
import './EventCreator.css';

const eventcreator = () => {
  return (
    <div className="event-modal">
      <form action="" method="POST">
        <h2 className="event-modal__title">Create your event</h2>
        <label htmlFor="event-name">event name</label>
        <input type="text" name="event-name"/>
      </form>
    </div>
  );
};

export default eventcreator;