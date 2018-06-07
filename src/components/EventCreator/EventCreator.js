import React, {Component} from 'react';
import './EventCreator.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class EventCreator extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.state = {
      title: '',
      host: '',
      startDate: moment(),
      localization: '',
      description: '',
      category: '',
    };
  }

  submitEvent = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      host: '',
      localization: '',
      description: '',
      category: '',
      openModal: false
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dateHandler = (date) =>{
    console.log(this.state.startDate);
    console.log(date);
    this.setState({
      startDate: date
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
        <textarea name="description" id="" cols="30" rows="10" required value={this.state.description}onChange={e => this.changeHandler(e)}></textarea>
        <label htmlFor="category">event category</label>
        <input type="text" name="category" value={this.state.category} 
        onChange={e => this.changeHandler(e)}/>
        <label>Event date</label>
        <DatePicker
          selected={moment(this.state.startDate)}
          onChange={this.dateHandler}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default EventCreator;