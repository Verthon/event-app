import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';
import EventContainer from './components/EventContainer/EventContainer';
import DB_CONFIG from './dbconfig.js';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
  }
  state = {
    query: '',
    openModal: false,
    eventContainer: [
      {title: 'Javascript conference', localization: 'Tokio', host: 'IT Ninja', date: '10.06.2017',description: 'Javascript conferrence, biggest community in Asia', category: "IT"},
      {title: 'Classic music concert', localization: 'Budapest', host: 'Budapest Philharmonic Orchestra', date: '13.01.2017 12:00PM', description: 'Classic music event', category: "music"},
      {title: 'Food market in Sevilla', localization: 'Sevilla', host: 'Sevilla nautral food', date: '21.05.2014 19:05AM', description: 'Biggest market in Europe', category: "food"}
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
    this.setState({
      eventContainer: [...this.state.eventContainer, inputs],
      openModal: false
    });
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const titleRef = rootRef.child('title');
    titleRef.on('value', () => {

    });

  }

  render() {
    //In render I can write JS code without any issues
    let eventContainer = null;
    let filteredEvents = this.state.eventContainer.filter(
      (event) => {
        console.log(this.state.query);
        return event.title.toLowerCase().indexOf(this.state.query) !== -1;
      }
    );

    if(this.state.eventContainer){
      eventContainer = (
        <div className="row">
          {
            filteredEvents.map((event, id)=>{
              return <EventContainer
              title={event.title}
              localization={event.localization}
              host={event.host} 
              date={event.date}
              description={event.description}
              category={event.category} 
              key={id}
              />
            })
          }
        </div>
      );
    }


    return (
      <main className="App">
        <Header>
          <Navbar/>
          <AddEventBtn showModal={this.showModal}/>
          <Search changed={this.searchQueryHandler}/>
        </Header>
        {this.state.openModal ? <EventCreator onSubmit={inputs => this.submitEvent(inputs)}/> : null}
        <section className="section section__events">
          <h1 className="section__title">Popular events</h1>
          {eventContainer}
        </section>
      </main>
    );
  }
}

export default App;
