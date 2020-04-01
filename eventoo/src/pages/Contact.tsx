import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import styled from 'styled-components';
import logo from '../assets/logo/logo-color.svg'

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Logo src={logo} alt="Eventoo"/>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <Title>Contact</Title>
        <p>Eventoo is a platform, that allows anyone to create, share, find and attend events. From music festivals, conferences and community meetups, to sport events. Our mission is to connect people with passion.</p>
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

export default Contact;
