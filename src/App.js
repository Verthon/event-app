import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import EventItem from "./components/EventItem";
import Navbar from './components/Navbar';
import Search from './components/Search';
import {db} from './components/Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      eventContainer: false,
    };
  }

  searchQueryHandler = e => {
    console.log(this);
    this.setState({
      query: e.target.value
    });
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
  }

  render() {
    let eventContainer = null;
    if (this.state.eventContainer) {
      eventContainer = (
        <div className="row">
          {this.state.eventContainer.map((event, id) => {
            return (
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
            );
          })}
        </div>
      );
    }

    return (
      <React.Fragment>
        <Navbar name="Eventoo" links={["events", "about", "contact"]} />
        <header className="hero">
          <h1 className="hero__title">Discover events</h1>      
          <div className="hero__content">
            <Link to="/create-event">
              <button className="btn">Add event</button>
            </Link>
            <p className="hero__desc">Build, manage and grow your events</p>
            
          </div>
        </header>
        <section className="section section__events">
          <h1 className="section__title">Trending events</h1>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>        
          {this.state.eventContainer ? eventContainer : <p>Loading</p>}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
