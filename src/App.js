import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import EventItem from "./components/EventItem";
import Navbar from './components/Navbar';
import Search from './components/Search';
import { withFirebase } from './components/Firebase';
import {Row} from './components/styles/components';
import Hero from './components/Hero';

//import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      eventContainer: false,
    };
  }

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value
    });
  };
  

  componentDidMount() {
    const {db} = this.props.firebase;
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
      let filteredEvents = this.state.eventContainer.filter(
        (event) => {
          return event.title.toLowerCase().indexOf(this.state.query) !== -1;
        }
      );
      eventContainer = (
          <Row>
            {filteredEvents.map((event, id) => {
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
                    featuredImage={event.featuredImage}
                  />
                );
            })}
          </Row>         
      );
    }

    return (
      <React.Fragment>
        <Navbar name="Eventoo" links={["events", "about", "contact", "create-event"]} />
        <Hero title="Discover events" text="Build, manage and grow your events"/>
        <section className="section section__events">
          <h2 className="section__title">Trending events</h2>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>        
          {this.state.eventContainer ? eventContainer : <div className="loader__wrapper"><div className="loader"></div></div>}
        </section>
        <section className="section section__events">
          <h2 className="section__title">Popular categories</h2>
        </section>
      </React.Fragment>
    );
  }
}

export default withFirebase(App);
