import React from 'react';
import EventItem from "./EventItem";
import Navbar from './Navbar';
import Search from './Search';
import { withFirebase } from './Firebase';
import {Title} from './Title';
import {SectionEvents} from './Section';
import Loader from './Loader';
import {Row} from './styles/components';
import {filterBySearch, filterByCategory, filterByCity} from '../helpers';
import {FiltersWrapper} from './Inputs';
import CategoryFilter from './CategoryFilter';
import CityFilter from './CityFilter';


class Events extends React.Component {
  state ={
    events: false,
    query: '',
    categories: false,
    category: "",
    cities: false,
    city: "",
    filteredEvents: false,
    activeFilter: "Search",
  }

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
      db
      .collection("cities")
      .get()
      .then(querySnapshot => {
        const cities = [];
        querySnapshot.docs.forEach(doc => {
          cities.push(doc.data());
        });
        this.setState({
          cities: cities
        });
      });
  }

  searchQueryHandler = e => {
    this.setState({
      query: e.target.value,
      activeFilter: "Search"
    });
  };

  filterCategory = e => {
    this.setState({
      category: e.target.value,
      activeFilter: "Category",
    });
  }

  filterCity = e => {
    this.setState({
      city: e.target.value,
      activeFilter: "City",
    });
  }

  render(){
    let eventContainer = null;
    let filteredEvents = null;
    if (this.state.events) {
      if(this.state.activeFilter === "Search"){
        filteredEvents = filterBySearch(this.state.events, this.state.query);
      }
      if(this.state.activeFilter === "Category"){
        filteredEvents = filterByCategory(this.state.events, this.state.category);
      }
      
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
          <FiltersWrapper>
            {this.state.categories ? <CategoryFilter default="Any category" items={this.state.categories} value={this.state.category}
            changed={this.filterCategory}/>: null}
            {this.state.cities ? <CityFilter default="Any city" items={this.state.cities} value={this.state.city}
            changed={this.filterCity}/>: null} 
          </FiltersWrapper>
          {this.state.events ? eventContainer : <Loader/>}
        </SectionEvents>   
      </React.Fragment>    
    )
  }
}

export default withFirebase(Events);