import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import Navbar from "./Navbar";
import DayPickerInput from "react-day-picker/DayPickerInput";
import PropTypes from 'prop-types';
import "react-day-picker/lib/style.css";

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
      category: "",
      imageUrl: "",
      day: "",
      time: "13:00",
    };
  }

  submitEvent = e => {
    e.preventDefault();
    firebase.settings({
      timestampsInSnapshots: true
    });
    const eventRef = firebase.collection("events").doc();
    eventRef.set({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description,
      category: this.state.category,
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render(props) {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="section">         
          <h1 className="section__title">Create your event</h1>
          <div className="event-modal">
            <form action="" onSubmit={e => this.submitEvent(e)}>
  
              <label className="label" htmlFor="title">
                event name
              </label>
              <input
                className="input"
                placeholder="eg. Football Event"
                type="text"
                name="title"
                required
                value={this.state.title}
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
                value={this.state.host}
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
                value={this.state.localization}
                onChange={e => this.changeHandler(e)}
              />

              <label className="label" htmlFor="category">categories</label>
              <select className="input" name="category" id="" value={this.state.category} 
              onChange={e => this.changeHandler(e)} required>
                {
                this.state.categories.map((cat, id) => {
                  return (
                    <option key={id} value={cat}>{cat}</option>
                  )
                })
                }
              </select>

              <label className="label" htmlFor="image-url">
                image URL
              </label>
              <input className="input" type="image-url" name="url" 
              placeholder="eg. https://unsplash.com/photos" 
              value={this.state.imageUrl} 
              onChange={e => this.changeHandler(e)} 
              required/>

              <label htmlFor="date" className="label">Date</label>
              <DayPickerInput 
              className="input"
              name="date"
              placeholder="DD/MM/YYYY" format="DD/MM/YYYY" 
              value={this.state.day} 
              onChange={e => this.changeHandler(e)}
              />

              <label htmlFor="time" className="label">Time</label>
              <input className="input" type="time" name="time" value={this.state.time} required/>

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
                value={this.state.description}
                onChange={e => this.changeHandler(e)}
              />

              <button className="btn" type="submit">
                Submit
              </button>
              <Link to="/">
                <button className="btn">Back to home</button>
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventCreator;
