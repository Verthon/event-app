import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import logo from '../../assets/logo/logo-color.svg'
import {EVENTS} from '../../constants/routes'
import { Styled } from './EventCreated.styles'

const Contact: React.FC<RouteComponentProps> = ({ history }) => {
  const navigateToHome = () => {
    history.push(EVENTS)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Styled.Wrapper>
          <Styled.CheckIcon />
          <Styled.Title>Event Created</Styled.Title>
          <p>Your event has been added succesfully.</p>
          <Styled.Button onClick={navigateToHome}>Back To Home</Styled.Button>
        </Styled.Wrapper>
      </IonContent>
    </IonPage>
  )
}

export default Contact
