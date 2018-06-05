import React, {Component} from 'react';
import './EventCreator.css';

class EventCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      container: [
        {title: ''},
        {host: ''},
        {localization: ''},
        {description: ''},
        {category: ''}
      ],
      openModal: false,
    };
  }

  submitEvent = (e) => {
    e.preventDefault();
    //e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
    console.log(e);
    this.setState({
      //Not working cant pass state
      container: [...this.state.container, {title: this.title,
        host: this.host, localization: this.title, description: this.description,
        category: this.category
      }],
      openModal: false
    
    });
  }

  render(props){
  return (
    <div className="event-modal">
      <form action="" onSubmit={this.submitEvent}>
        <h2 className="event-modal__title">Create your event</h2>
        <label htmlFor="event-name">event name</label>
        <input type="text" name="event-name" required ref="title"/>
        <label htmlFor="event-host">event host</label>
        <input type="text" name="event-host" required ref="host"/>
        <label htmlFor="event-localization">event localization</label>
        <input type="text" name="event-localization" required ref="localization"/>
        <label htmlFor="event-description">event description</label>
        <textarea name="event-description" id="" cols="30" rows="10" required ref="description"></textarea>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default EventCreator;