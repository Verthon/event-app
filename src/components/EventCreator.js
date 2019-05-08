import React, { Component } from "react";
import Navbar from "./Navbar";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {withFirebase} from "./Firebase"
import {SIGN_IN, EVENTS} from '../constants/routes';
import {formatDay} from '../helpers';

class EventCreator extends Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.state = {
      title: "",
      host: "",
      localization: "",
      description: "",
      categories: ["Sport", "Music", "Education", "Business", "Food&Drink"],
      category: "Sport",
      imageUrl: "",
      day: new Date(2019, 6, 1),
      hour: "13:00",
    };
  }

  componentDidMount() {
    if(this.props.firebase.auth.currentUser === null){
      this.props.history.push(SIGN_IN);
    };
  }

  submitEvent = (e) => {
    e.preventDefault();
    const eventRef = this.props.firebase.db.collection("events").doc();
    eventRef.set({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description,
      category: this.state.category,
      day: this.state.day,
      hour: this.state.hour,
      featuredImage: this.state.imageUrl,
      uid: this.props.firebase.auth.currentUser.uid
    });
    //After sending data to database redirect to /events
    this.props.history.push(EVENTS);
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  dayPickerHandler = date => {
    date = formatDay(date);
    this.setState({
      day: date
    })
  }

  render() {
    
    const {title, host, localization, description, category, categories, day, hour, imageUrl} = this.state;
    return (
          <React.Fragment>  
            <Navbar/>
            <div className="section section__events">         
              <h1 className="section__title">Create your event</h1>
              <div className="event-modal">
                <form action="" onSubmit={e => this.submitEvent(e)}>
      
                  <label className="label" htmlFor="title">
                    event name
                  </label>
                  <input className="input"
                    placeholder="eg. Football Event"
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <label className="label" htmlFor="host">
                    event host
                  </label>
                  <input
                    className="input"
                    placeholder="eg. Company"
                    type="text"
                    name="host"
                    required
                    value={host}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <label className="label" htmlFor="localization">
                    event localization
                  </label>
                  <input
                    className="input"
                    placeholder="eg. Bielsko-Biała, Poland"
                    type="text"
                    name="localization"
                    required
                    value={localization}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <label className="label" htmlFor="category">categories</label>
                  <select className="input" name="category" id="" value={category} 
                  onChange={e => this.changeHandler(e)} required>
                    {
                    categories.map((cat, id) => {
                      return (
                        <option key={id} value={cat}>{cat}</option>
                      )
                    })
                    }
                  </select>
    
                  <label className="label" htmlFor="image-url">
                    image URL
                  </label>
                  <input className="input" type="text" name="imageUrl" 
                  placeholder="eg. https://source.unsplash.com/weekly?water" 
                  value={imageUrl} 
                  onChange={e => this.changeHandler(e)} 
                  />
    
                  <label htmlFor="day" className="label">Date</label>
                  <DayPickerInput 
                  className="input"
                  name="day"
                  placeholder="DD/MM/YYYY" format="DD/MM/YYYY" 
                  value={day}
                  onDayChange={day => this.dayPickerHandler(day)}
                  inputProps={
                    { required: true }
                  } 
                  onChange={e => this.changeHandler(e)}
                  required
                  />
    
                  <label htmlFor="hour" className="label">hour</label>
                  <input className="input" type="time" name="hour" 
                  value={hour} 
                  required
                  onChange={e => this.changeHandler(e)}
                  />
    
                  <label className="label" htmlFor="description">
                    event description
                  </label>
                  <textarea
                    className="input input--textarea"
                    name="description"
                    placeholder="Event Description"
                    id=""
                    cols="20"
                    rows="10"
                    required
                    value={description}
                    onChange={e => this.changeHandler(e)}
                  />
    
                  <button className="btn" type="submit">
                    Submit event
                  </button>
                </form>
              </div>
            </div>
          </React.Fragment>
          )
        }
  }

export default withFirebase(EventCreator);