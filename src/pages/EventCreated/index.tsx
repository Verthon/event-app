import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import lottie from 'lottie-web'
import logo from '../../assets/logo/logo-color.svg'
import { EVENTS } from '../../constants/routes'
import { Styled } from './EventCreated.styles'
import animationData from '../../animations/success-tick-animation.json';

const Contact: React.FC<RouteComponentProps> = ({ history }) => {
  const animationContainer: any = React.createRef()
  const navigateToHome = () => {
    history.push(EVENTS)
  }
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Styled.Wrapper>
          <div className="animation-container" ref={animationContainer}></div>
          {/* <Styled.CheckIcon /> */}
          <Styled.Title>Event Created</Styled.Title>
          <p>Your event has been added succesfully.</p>
          <Styled.Button type="button" onClick={navigateToHome}>
            Back To Home
          </Styled.Button>
        </Styled.Wrapper>
      </IonContent>
    </IonPage>
  )
}

export default Contact
