import React, {Component} from 'react';
import './EventContainer.css';

class eventContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className="event-container">
      <img src={this.props.img} alt="default"/>
      <h2>{this.props.title}</h2>
      <p>{this.props.localization}</p>
      <i>{this.props.host}</i>
      <time>{this.props.date}</time>
      <time>{this.props.time}</time>
      <p>{this.props.description}</p>
      <p>category: {this.props.category}</p>
      <button className="btn" onClick={this.props.edit}>edit</button>
      <button className="btn" onClick={this.props.delete}>delete</button>
    </div>
    );
  }

}

export default eventContainer;