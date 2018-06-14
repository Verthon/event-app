import React, {Component} from 'react';
import './EventContainer.css';

class eventContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className="event-container">
      <img className="event-container__image" src={this.props.img} alt="default"/>
      <div className="event-container__date">
        <time className="time-container">{this.props.date}</time>
        <time className="time-container">{this.props.time}</time>
      </div> 
      <h2 className="event-container__title">{this.props.title}</h2>
      <p>Event host: {this.props.host}</p>
      <p>{this.props.localization}</p>
      <p>category: {this.props.category}</p>
      <div>
        <button className="btn btn--reverse" onClick={this.props.edit}>edit</button>
        <button className="btn btn--reverse" onClick={this.props.delete}>delete</button>
      </div>  
    </div>
    );
  }

}

export default eventContainer;