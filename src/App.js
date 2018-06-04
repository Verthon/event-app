import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';
import EventContainer from './components/EventContainer/EventContainer';

class App extends Component {
  state = {
    query: null,
    openModal: false,
    eventContainer: [
      {day: 'April 10', hour: '10:30 AM'},
      {day: 'May 3', hour: '11:15 PM'},
      {day: 'March 30', hour: '13:21 AM'}
    ],
    eventModal: {
      name: '',
      location: '',
      organizer: '',
      description: '',
      photo: '',
      category:[],
      tags:[],
    }
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

  submitEvent = (e) => {
    e.preventDefault();
    //e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
    this.setState({
      eventContainer: this.state.eventContainer.concat({day: 'December 30', hour: '11:21 AM'}),
      openModal: false

    });

  }

  render() {
    //In render I can write JS code without any issues
    let eventContainer = null;

    if(this.state.eventContainer){
      eventContainer = (
        <div className="row">
          {
            this.state.eventContainer.map((event, id)=>{
              return <EventContainer day={event.day} hour={event.hour} key={id}/>
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
        {this.state.openModal ? <EventCreator submit={(e) => this.submitEvent(e)}/> : null}
        <section className="section section__events">
          <h1 className="section__title">Popular events</h1>
          {eventContainer}
        </section>
      </main>
    );
  }
}

export default App;
