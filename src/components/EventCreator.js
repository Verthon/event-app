import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from './firebase';

class EventCreator extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = {
      inputName: '',
      title: '',
      host: '',
      localization: '',
      description: '',
      category: '',     
    };
  }

  submitEvent = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const eventRef = db.collection("events").add({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description
    });
    this.setState({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description,
      category: this.state.category,
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(props){
  return (
    <div className="event-modal">
      <form action="" onSubmit={(e) => this.submitEvent(e)}>
        <h2 className="event-modal__title">Create your event</h2>
        <label htmlFor="title">event name</label>
        <input type="text" name="title" required value={this.state.title}
        onChange={e => this.changeHandler(e)}/>
        <label htmlFor="host">event host</label>
        <input type="text" name="host" required value={this.state.host} 
        onChange={e => this.changeHandler(e)}/>
        <label htmlFor="localization">event localization</label>
        <input type="text" name="localization" required value={this.state.localization}
        onChange={e => this.changeHandler(e)}/>
        <label htmlFor="description">event description</label>
        <textarea name="description" id="" cols="30" rows="10" required value={this.state.description} onChange={e => this.changeHandler(e)}></textarea>
        <button className="btn" type="submit">Submit</button>
        <Link to="/"><button className="btn">Back to home</button></Link>
      </form>
    </div>
  )
}
}

export default EventCreator;