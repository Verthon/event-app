import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';
import EventContainer from './components/EventContainer/EventContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
  }
  state = {
    query: null,
    openModal: false,
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

  render() {
    //In render I can write JS code without any issues
    let eventContainer = null;

    if(this.state.eventContainer){
      eventContainer = (
        <div className="row">
          {
            this.state.eventContainer.map((event, id)=>{
              return <EventContainer
              title={event.title}
              localization={event.localization}
              host={event.host} 
              day={event.day} 
              hour={event.hour}
              description={event.description} 
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
