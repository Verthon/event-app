import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import EventItem from "./components/EventItem";
import firebase from "./components/firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      eventContainer: false
    };
  }

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value
    });
  };

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

  componentDidMount() {
    firebase
      .collection("events")
      .get()
      .then( querySnapshot => {
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
              />
            );
          })}
        </div>
      );
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1 className="app-header__title">Eventoo</h1>
          <nav className="app-navigation">
            <ul>
              <li className="app-navigation__item">
                <a href="#">Home</a>
              </li>
              <li className="app-navigation__item">
                <a href="#events">Events</a>
              </li>
              <li className="app-navigation__item">
                <a href="#events">About</a>
              </li>
              <li className="app-navigation__item">
                <a href="#events">Contact</a>
              </li>
            </ul>
          </nav>
          <Link to="/create-event">
            <button className="btn btn--large">Add event</button>
          </Link>
          <div className="searchbox">
            <label htmlFor="eventSearch" aria-hidden="true">
              Search for event
            </label>
            <input
              className="input"
              type="search"
              name="eventSearch"
              id="eventSearch"
              placeholder="Search"
              onChange={this.searchQueryHandler}
            />
          </div>
        </header>
        <section className="section section__events">
          <h1 className="section__title">Popular events</h1>
          {this.state.eventContainer ? eventContainer : <p>Loading</p>}
        </section>
      </main>
    );
  }
}

export default App;
