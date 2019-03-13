import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Event from './components/Event';
import firebase from './components/firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
  }
  state = {
    query: null,
    eventContainer: [
      {title: 'Javascript conference', localization: 'Tokio', day: 'April 10', hour: '10:30 AM',host: 'IT Ninja', description: 'Javascript conferrence, biggest community in Asia'},
      {title: 'Classic music concert', localization: 'Budapest', day: 'May 3', hour: '11:15 PM',host: 'Budapest Philharmonic Orchestra', description: 'Classic music event'},
      {title: 'Food market in Sevilla', localization: 'Sevilla', day: 'March 30', hour: '13:21 AM', host: 'Sevilla nautral food',description: 'Biggest market in Europe'}
    ],
  }; 
  
  searchQueryHandler = (e) =>{
    this.setState({
      query: e.target.value
    });
  }

  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  submitEvent = (inputs) => {
    //e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
    console.log(inputs);
    this.setState({
      //Not working cant pass state
      eventContainer: [...this.state.eventContainer, inputs],
      openModal: false

    });
  }

  componentDidMount(){

  }

  render() {
    //In render I can write JS code without any issues
    let eventContainer = null;

    if(this.state.eventContainer){
      eventContainer = (
        <div className="row">
          {
            this.state.eventContainer.map((event, id)=>{
              return <Event
              key={id}
              title={event.title}
              localization={event.localization}
              host={event.host} 
              day={event.day} 
              hour={event.hour}
              description={event.description} 
              />
            })
          }
        </div>
      );
    }


    return (
      <main className="App">
        <header className="app-header">
          <h1 className="app-header__title">Welcome to event-app</h1>
          <nav className="app-navigation">
            <ul>
              <li className="app-navigation__item"><a href="#">Home</a></li>
              <li className="app-navigation__item"><a href="#events">Events</a></li>
              <li className="app-navigation__item"><a href="#events">About</a></li>
              <li className="app-navigation__item"><a href="#events">Contact</a></li>
            </ul>
          </nav>
          <Link to="/create-event"><button className="btn">Add event</button></Link>
          <div className="searchbox">
            <h2 className="searchbox__title">Find your event</h2>
            <label htmlFor="eventSearch" aria-hidden="true">Search for event</label>
            <input type="search" name="eventSearch" id="eventSearch" onChange={this.searchQueryHandler}/>
          </div>
        </header>
        <section className="section section__events">
          <h1 className="section__title">Popular events</h1>
          {eventContainer}
        </section>
      </main>
    );
  }
}

export default App;
