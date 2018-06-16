import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';
import EventContainer from './components/EventContainer/EventContainer';
import About from './components/About/About';
import DB_CONFIG from './dbconfig.js';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.showModal = this.showModal.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
  }

  state = {
    query: '',
    openModal: false,
    eventContainer: [
      {img: 'https://images.unsplash.com/photo-1527938861934-666a754e21e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96c4c4ce11515a34eb2a3619e49a20f3&auto=format&fit=crop&w=1053&q=80', title: 'Javascript conference', localization: 'Tokio', host: 'IT Ninja', date: '10.06.2017',
      time:'05:00',description: 'Javascript conferrence, biggest community in Asia', category: "IT"},

      {img: 'https://images.unsplash.com/photo-1479935276380-b9561c38eceb?ixlib=rb-0.3.5&s=ea432148ad8e5cb0386a939ee26ee23d&auto=format&fit=crop&w=1046&q=80', title: 'Classic music concert', localization: 'Budapest', host: 'Philharmonic Orchestra', date: '13.01.2017', time:'12:00', description: 'Classic music event', category: "music"},

      {img: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=572fdc7f4e94294fd602817ced56bc87&auto=format&fit=crop&w=1050&q=80',title: 'Food market in Sevilla', localization: 'Sevilla', host: 'Natural food Company', date: '21.05.2014', time: '07:05', description: 'Biggest market in Europe', category: "food"}
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
      // using spread operator instead of push
      eventContainer: [...this.state.eventContainer, inputs],
      openModal: false
    });
  }

  deleteEvent = (id) => {
    const event = this.state.eventContainer;
    event.splice(id, 1);
    this.setState({
      event: event
    });
  }

  componentDidMount() {
    
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
        <div id="events" className="row">
          {
            filteredEvents.map((event, id)=>{
              return <EventContainer
              img={event.img}
              title={event.title}
              localization={event.localization}
              host={event.host} 
              date={event.date}
              time={event.time}
              description={event.description}
              category={event.category} 
              key={id}
              delete={() => this.deleteEvent(id)}
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
          <div className="app-header__container">
            <h1 className="app-header__title">Where the events happen</h1>
            <AddEventBtn showModal={this.showModal}/>
          </div>  
          <Search changed={this.searchQueryHandler}/>
        </Header>
        {this.state.openModal ? <EventCreator onSubmit={inputs => this.submitEvent(inputs)}/> : null}
        <section className="section section--events">
          <h1 className="section__title">Popular events</h1>
          {eventContainer}
        </section>
        <About />
      </main>
    );
  }
}

export default App;
