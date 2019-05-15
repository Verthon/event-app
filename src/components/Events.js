import React from 'react';
import EventItem from "./EventItem";
import Navbar from './Navbar';
import Search from './Search';
import { withFirebase } from './Firebase';
import {Title} from './Title';
import {SectionEvents} from './Section';
import Loader from './Loader';
import {Row} from './styles/components';

class Events extends React.Component {
  state ={
    events: false,
    query: '',
  }

  componentDidMount() {
    const {db} = this.props.firebase;
    db
    .collection("events")
    .get()      
    .then( querySnapshot => {
      const events = [];
      querySnapshot.docs.forEach(doc => {
        events.push(doc.data());
      });
      this.setState({
        events: events
      });
    });
  }

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value
    });
  };

  render(){
    let eventContainer = null;
    if (this.state.events) {
      let filteredEvents = this.state.events.filter(
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

    return(
      <React.Fragment>
        <Navbar/>
        <SectionEvents>
          <Title>Events list</Title>
          <Search query={this.state.query} changed={this.searchQueryHandler}/>
          {this.state.events ? eventContainer : <Loader/>}
        </SectionEvents>   
      </React.Fragment>    
    )
  }
}

export default withFirebase(Events);