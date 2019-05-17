import React, { Component } from "react";
import "./App.css";
import EventItem from "./components/EventItem";
import Navbar from './components/Navbar';
import Search from './components/Search';
import { withFirebase } from './components/Firebase';
import {Row} from './components/styles/components';
import Hero from './components/Hero';
import {Title} from './components/Title';
import {SectionEvents} from './components/Section';
import Loader from './components/Loader';
import {Link} from 'react-router-dom';
import {filterSearch} from './helpers';

//import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      events: false,
      filteredEvents: false,
      categories: [],
      category: "",
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
      .get()
      .then(querySnapshot => {
        const events = [];
        querySnapshot.docs.forEach(doc => {
          events.push(doc.data());
        });
        this.setState({
          events: events
        });
      });
      db
      .collection("categories")
      .get()
      .then(querySnapshot => {
        const categories = [];
        querySnapshot.docs.forEach(category => {
          categories.push(category.data());
        });
        this.setState({
          categories: categories
        })
      });
  }


  render() {
    let eventContainer = null;
    
    if (this.state.events) {
      let filteredEvents = filterSearch(this.state.events, this.state.query);
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
        <SectionEvents>
          <Title>Trending events</Title>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>        
          {this.state.events ? eventContainer : <Loader/>}
          <footer className="event-section__footer"><Link to="/events">More events</Link></footer>
        </SectionEvents>
        <SectionEvents>
          <Title>Categories</Title>
        </SectionEvents>
      </React.Fragment>
    );
  }
}

export default withFirebase(App);
