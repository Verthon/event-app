import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import logo from '../../assets/logo/logo-color.svg'
import {Styled} from './Contact.styles'

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo"/>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <Styled.Title>Contact</Styled.Title>
        <Styled.Description>Eventoo is a platform, that allows anyone to create, share, find and attend events. From music festivals, conferences and community meetups, to sport events. Our mission is to connect people with passion.</Styled.Description>
      </IonContent>
    </IonPage>
  );
};


export default Contact;