import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Firebase, {FirebaseContext} from "./Firebase";
import Navbar from "./Navbar";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Login from './Login';
import firebase, {firebaseApp} from './Firebase';

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
      day: "",
      time: "13:00",
      logged: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  submitEvent = (e) => {
    e.preventDefault();
    const eventRef = firebase.db.collection("events").doc();
    eventRef.set({
      title: this.state.title,
      host: this.state.host,
      localization: this.state.localization,
      description: this.state.description,
      category: this.state.category,
      day: this.state.day,
      time: this.state.time,
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  authHandler = async authData => {
    this.setState({
      logged: firebase.auth().currentUser
    })
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler)
  }

  render() {

    if(firebase.auth().currentUser === null){
    return <Login authenticate={this.authenticate} />};
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
                  <input className="input"
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
                  <input className="input" type="url" name="image-url" 
                  placeholder="eg. https://unsplash.com/photos" 
                  value={this.state.imageUrl} 
                  onChange={e => this.changeHandler(e)} 
                  />
    
                  <label htmlFor="date" className="label">Date</label>
                  <DayPickerInput 
                  className="input"
                  name="date"
                  placeholder="DD/MM/YYYY" format="DD/MM/YYYY" 
                  value={this.state.day}
                  inputProps={
                    { required: true }
                  } 
                  onChange={e => this.changeHandler(e)}
                  required
                  />
    
                  <label htmlFor="time" className="label">Time</label>
                  <input className="input" type="time" name="time" 
                  value={this.state.time} 
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
          )
        }
  }

export default EventCreator;
