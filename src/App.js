import React, { Component } from "react";
import "./App.css";
import EventItem from "./components/EventItem";
import Navbar from './components/Navbar';
import { withFirebase } from './components/Firebase';
import {Row} from './components/styles/components';
import Hero from './components/Hero';
import {Title} from './components/Title';
import {SectionEvents} from './components/Section';
import Loader from './components/Loader';
import {Link} from 'react-router-dom';
import {Button} from './components/Button';
import Card from './components/Card';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      events: false,
    };
  }

  componentDidMount() {
    const {db} = this.props.firebase;
      db
      .collection("events")
      .where("promoted", "==", true)
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
  }


  render() {
    let eventContainer = null;
    
    if (this.state.events) {
      eventContainer = (
          <Row>
            {this.state.events.map((event, id) => {
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
          {this.state.events ? eventContainer : <Loader/>}
          <footer className="event-section__footer"><Link to="/events"><Button>More events</Button></Link></footer>
        </SectionEvents>
        <SectionEvents>
          <Title>How it works?</Title>
          
          <p style={{textAlign: 'center'}}>With Eventoo you can easily build, manage and grow your events.</p>
          <Card title="Build event" class="fas fa-clock" text="Build personalized event in a few minutes"/>
          <Card title="Get audience" class="fas fa-users" text="Quickly get new followers"/>
          <Card title="Share" class="fas fa-users" text="Share your ideas, projects with others"/>
          <Title>Our platform offers</Title>
          <p style={{textAlign: 'center'}}>Core features of Eventoo</p>
          <Card title="Security first" class="fas fa-lock" text="Security on a highest level"/>
          <Card title="User friendly" class="fas fa-users" text="Interface created by humans for humans!"/>
          <Card title="Get notified" class="fas fa-bell" text="Build in notification system"/>
        </SectionEvents>
      </React.Fragment>
    );
  }
}

export default withFirebase(App);
