import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Event from './components/Event';
import firebase from './components/firebase';

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    query: null,
    eventContainer: false,
  }; 
  
  searchQueryHandler = (e) =>{
    this.setState({
      query: e.target.value
    });
  }

  // submitEvent = (inputs) => {
  //   //e.stopPropagation();
  //   //e.nativeEvent.stopImmediatePropagation();
  //   //console.log(inputs);
  //   this.setState({
  //     //Not working cant pass state
  //     eventContainer: [...this.state.eventContainer, inputs],
  //     openModal: false

  //   });
  // }

  componentDidMount(){
    
    const events = [];
    firebase.collection("events").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        //console.log(doc.data());
        events.push(doc.data());
          // doc.data() is never undefined for query doc snapshots
        //    
      });
    });
    this.setState({
      eventContainer: events
    });
  }

  render() {
    //In render I can write JS code without any issues
    let eventContainer = null;
    
    if(this.state.eventContainer){
      console.log(this.state.eventContainer);
      eventContainer = (
        <div className="row">
          {
            this.state.eventContainer.map((event, id)=>{
              return this.state.eventContainer ? <Event
              key={id}
              title={event.title}
              localization={event.localization}
              host={event.host} 
              day={event.day} 
              hour={event.hour}
              description={event.description}
              />
              : <p>Loading...</p>
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
            <input class="input" type="search" name="eventSearch" id="eventSearch" placeholder="Search" onChange={this.searchQueryHandler}/>
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
