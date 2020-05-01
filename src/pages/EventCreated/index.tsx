import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import logo from '../../assets/logo/logo-color.svg'
import { Styled } from './EventCreated.styles'

const Contact: React.FC = ({ history }: any) => {
  const navigateToHome = () => {
    history.push('/events')
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
