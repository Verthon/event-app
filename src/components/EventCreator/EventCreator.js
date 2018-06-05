import React from 'react';
import './EventCreator.css';

class EventCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      host: '',

    };
  }
  render(props){
  return (
    <div className="event-modal">
      <form action="" onSubmit={props.submit}>
        <h2 className="event-modal__title">Create your event</h2>
        <label htmlFor="event-name">event name</label>
        <input type="text" name="event-name" required value={props.title}/>
        <label htmlFor="event-host">event host</label>
        <input type="text" name="event-host" required value={props.host}/>
        <label htmlFor="event-localization">event localization</label>
        <input type="text" name="event-localization" required value={props.localization}/>
        <label htmlFor="event-description">event description</label>
        <textarea name="event-description" id="" cols="30" rows="10" required value={props.description}></textarea>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EventCreator;