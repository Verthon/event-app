import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import EventCreator from './components/EventCreator/EventCreator';
import AddEventBtn from './components/AddEventBtn/AddEventBtn';

class App extends Component {
  state = {
    query: null,
    openModal: false,
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
    return <EventCreator />
  }
  render() {
    return (
      <main className="App">
        <Header>
          <Navbar/>
          <AddEventBtn showModal={this.showModal}/>
        </Header>
        <Search changed={this.searchQueryHandler}/>
        <h1>{this.state.query}</h1>
        
      </main>
    );
  }
}

export default App;
