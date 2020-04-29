import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/react'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import bg from '../assets/backgrounds/main-bg-sm.svg'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import { loginWithSocial } from '../helpers/login'

const SignIn: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content--color">
        <img className="image" src={bg} alt="" />
        <ContentWrapper>
          <Title>Welcome back!</Title>
          <Paragraph>Sign in using your Facebook or Google account.</Paragraph>
          <ButtonWrapper>
            <FacebookSignButton onClick={() => loginWithSocial('Facebook', props.history)}>
              <IonIcon class="btn-icon" icon={logoFacebook} />
              login
            </FacebookSignButton>
            <GoogleSignButton onClick={() => loginWithSocial('Google', props.history)}>
              <IonIcon class="btn-icon" icon={logoGoogle} />
              login
            </GoogleSignButton>
          </ButtonWrapper>
        </ContentWrapper>
      </IonContent>
    </IonPage>
  )
}

const ContentWrapper = styled.div`
  font-family: var(--ion-decorative-font);
  padding: 0 2rem;
`

const Title = styled.h1`
  font-weight: 600;
  color: var(--ion-color-primary);
`

const Paragraph = styled.p`
  color: var(--ion-color--main-text);
  margin: 0.5rem 0;
`

const ButtonWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
`

const FacebookSignButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Signika';
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 2px;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  margin: 0 1rem 0 0;
`

const GoogleSignButton = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Signika';
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 2px;
  background-color: #ffffff;
  color: var(--ion-color-primary);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`

export default SignIn
