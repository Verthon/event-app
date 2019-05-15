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
        <SectionEvents>
          <Title>Trending events</Title>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>        
          {this.state.eventContainer ? eventContainer : <Loader/>}
        </SectionEvents>
        <SectionEvents>
          <Title>Categories</Title>
        </SectionEvents>
      </React.Fragment>
    );
  }
}

export default withFirebase(App);
