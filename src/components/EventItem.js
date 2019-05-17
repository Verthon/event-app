import React from 'react';
import {formatLink} from '../helpers';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {send} from '../reducers/actions';
import styled from 'styled-components';
import {colors, fonts, media} from './styles/variables';
import {fadeIn} from './styles/animations';
import {Column} from './styles/components';

const Event = styled.div`
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  width: auto;
  background: ${colors.White};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  line-height: 1.7;
  animation: ${fadeIn} 2s;
  ${media.tablet}{
    max-width: 100%;
  }
  ${media.ipadMini}{
    max-width: 350px;
  }
  ${media.ipadPro}{
    max-width: 95%;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-family: ${fonts.decorative};
`;

const Image = styled.img`
  animation: ${fadeIn} 1.5s;
`

const Time = styled.time`

`;

const Paragraph = styled.p`
  margin: 0;
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
        <Column>
          <Event>
            <Image src={featuredImage+'/500x200'} alt=""/>
            <Link to={`/events/${formatLink(title)}`} onClick={this.send}>
              <Title>{title}</Title>
              <Paragraph>{localization}</Paragraph>
              <Time datetime={day}>{day}</Time>
            </Link>
          </Event>
        </Column>
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