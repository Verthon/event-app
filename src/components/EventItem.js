import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {send} from '../reducers/actions';
import styled from 'styled-components';
import {colors, fonts} from './styles/variables';
import {fadeIn} from './styles/animations';

const Event = styled.div`
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  width: 100%;
  background: ${colors.White};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  line-height: 1.7;
  animation: ${fadeIn} 2s;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-family: ${fonts.decorative};
`;

const Image = styled.img`
  animation: ${fadeIn} 1.5s;
`

const Time = styled.time`

`;

const Paragraph = styled.p`

`;

class EventItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      event: {
        title: this.props.title,
        localization: this.props.localization,
        day: this.props.day,
        category: this.props.category,
        hour: this.props.hour,
        description: this.props.description,
        host: this.props.host,
        featuredImage: this.props.featuredImage
      }
    }
  }

  send = () => {
    this.props.send(this.state.event)
  }

  render(props){
    const {title, localization, day, featuredImage} = this.props;
    return (
      <React.Fragment>
        <Event>
          <Image src={featuredImage+'/500x200'} alt=""/>
          <Link to={`/events/${formatLink(title)}`} onClick={this.send}>
            <Title>{title}</Title>
            <Paragraph>{localization}</Paragraph>
            <Time datetime={day}>{day}</Time>
          </Link>
        </Event>
      </React.Fragment>     
      )
    }
}

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    send: event => dispatch(send(event))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);