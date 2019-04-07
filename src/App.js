<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';
import EventContainer from './components/EventContainer/EventContainer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DB_CONFIG from './dbconfig.js';
import firebase from 'firebase';
import {BrowserRouter, Route} from 'react-router-dom';

=======
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import EventItem from "./components/EventItem";
import Navbar from './components/Navbar';
import Search from './components/Search';
import {db} from './components/Firebase';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
>>>>>>> dev

class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.submitEvent = this.submitEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.showModal = this.showModal.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('eventContainer');
  }

  state = {
    query: '',
    openModal: false,
    eventContainer: [
      {img: 'https://images.unsplash.com/photo-1527938861934-666a754e21e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96c4c4ce11515a34eb2a3619e49a20f3&auto=format&fit=crop&w=1053&q=80', title: 'Javascript conference', localization: 'Tokio', host: 'IT Ninja', date: '10.06.2017',
      time:'05:00',description: 'Javascript conferrence, biggest community in Asia. Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ', category: "IT"},

      {img: 'https://images.unsplash.com/photo-1479935276380-b9561c38eceb?ixlib=rb-0.3.5&s=ea432148ad8e5cb0386a939ee26ee23d&auto=format&fit=crop&w=1046&q=80', title: 'Classic music concert', localization: 'Budapest', host: 'Philharmonic Orchestra', date: '13.01.2017', time:'12:00', description: 'Classic music event. Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.', category: "music"},

      {img: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=572fdc7f4e94294fd602817ced56bc87&auto=format&fit=crop&w=1050&q=80',title: 'Food market in Sevilla', localization: 'Sevilla', host: 'Natural food Company', date: '21.05.2014', time: '07:05', description: 'Biggest market in Europe. Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.', category: "food"}
    ],
  }; 
  
  searchQueryHandler = (e) =>{
    this.setState({
      query: e.target.value
    });
=======
    this.state = {
      query: "",
      eventContainer: false,
    };
>>>>>>> dev
  }

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value
    });
<<<<<<< HEAD
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
=======
  };
  

  componentDidMount() {
      db
      .collection("events")
      .limit(3)
      .get()
      .then(querySnapshot => {
        const events = [];
        querySnapshot.docs.forEach(doc => {
          events.push(doc.data());
        });
        this.setState({
          eventContainer: events
        });
      });
>>>>>>> dev
  }

  componentWillMount(){
    
  }

  componentDidUpdate() {
    
  }

  componentDidMount() {
    
  }

  render() {
    let eventContainer = null;
<<<<<<< HEAD
    let filteredEvents = this.state.eventContainer.filter(
      (event) => {
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
=======
    
    if (this.state.eventContainer) {
      let filteredEvents = this.state.eventContainer.filter(
        (event) => {
          return event.title.toLowerCase().indexOf(this.state.query) !== -1;
        }
      );
      eventContainer = (
        <TransitionGroup>
          <div className="row">
            {filteredEvents.map((event, id) => {
              return (
                <CSSTransition
                  key={"csst" + id}
                  timeout={1000}
                  in={true}
                  classNames={{
                    
                  }}
                >
                  <EventItem
                    key={id}
                    title={event.title}
                    localization={event.localization}
                    host={event.host}
                    day={event.day}
                    hour={event.hour}
                    description={event.description}
                    category={event.category}
                  />
                </CSSTransition>
                );
            })}
          </div>
        </TransitionGroup>          
>>>>>>> dev
      );
    }

    return (
<<<<<<< HEAD
      <BrowserRouter>
        <main className="App">
          <Header>
            <Navbar/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
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
        </main>
      </BrowserRouter>
=======
      <React.Fragment>
        <Navbar name="Eventoo" links={["events", "about", "contact"]} />
        <header className="hero">
          <h1 className="hero__title">Discover events</h1>      
          <div className="hero__content">
            <Link to="/create-event">
              <button className="btn btn--hero">Add event</button>
            </Link>
            <p className="hero__desc">Build, manage and grow your events</p>
            
          </div>
        </header>
        <section className="section section__events">
          <h1 className="section__title">Trending events</h1>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>        
          {this.state.eventContainer ? eventContainer : <div className="loader__wrapper"><div className="loader"></div></div>}
        </section>
      </React.Fragment>
>>>>>>> dev
    );
  }
}

export default App;
