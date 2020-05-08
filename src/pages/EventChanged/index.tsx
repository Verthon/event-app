import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import logo from '../../assets/logo/logo-color.svg'
import { ACCOUNT } from '../../constants/routes'
import { Styled } from './EventChanged.styles'

const EventChanged: React.FC<RouteComponentProps> = ({ history }) => {
  const navigateToHome = () => {
    history.push(ACCOUNT)
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
          <Styled.Title>Event Changed</Styled.Title>
          <p>Your event has been edited succesfully.</p>
          <Styled.Button onClick={navigateToHome}>
            Back To Account
          </Styled.Button>
        </Styled.Wrapper>
      </IonContent>
    </IonPage>
  )
}

export default EventChanged
