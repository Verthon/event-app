import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import styled from 'styled-components';
import logo from '../assets/logo/logo-color.svg'

const Contact: React.FC = ({ history} : any) => {
  const navigateToHome = () => {
    history.push('/events')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Logo src={logo} alt="Eventoo"/>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <Title>Contact</Title>
        <p>Your event has been added succesfully.</p>
        <Button onClick={navigateToHome}>Back To Home</Button>
      </IonContent>
    </IonPage>
  );
};

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Title = styled.h1`
  margin-top: 0;
`

const Button = styled.button`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--ion-decorative-font);
  border-radius: 2px;
  width: 90%;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  margin: 1rem auto;
`

export default Contact;
