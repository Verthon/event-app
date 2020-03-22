import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/react'
import React from 'react'
import styled from 'styled-components'
import background from '../assets/backgrounds/login-bg.svg'
import { logoGoogle, logoFacebook } from 'ionicons/icons'
import { withFirebase } from '../firebase'
import useAuth from '../hooks/useAuth'

const SignIn: React.FC = (props: any) => {
  const auth = useAuth()
  const loginWithSocial = (provider: string) => {
    auth[`loginWith${provider}`]()
    .then((result: any) => props.history.push('/account'))
    .catch((error: any) => console.log(`Error occurred while signing in using ${provider} provider.`, error))
    // props.firebase.auth.onAuthStateChanged((authUser: any) => {
    //   return authUser ? props.history.push('/account') : null
    // })
  }

  console.log('firebase auth', auth.user)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-content--color">
        <img className="image" src={background} alt="" />
        <ContentWrapper>
          <Title>Welcome back!</Title>
          <Paragraph>Sign in using your Facebook or Google account.</Paragraph>
          <ButtonWrapper>
            <Button onClick={() => loginWithSocial('Facebook')}>
              <IonIcon class="btn-icon" icon={logoFacebook} />
              login
            </Button>
            <WhiteButton onClick={() => loginWithSocial('Google')}>
              <IonIcon class="btn-icon" icon={logoGoogle} />
              login
            </WhiteButton>
          </ButtonWrapper>
        </ContentWrapper>
      </IonContent>
    </IonPage>
  )
}

const ContentWrapper = styled.div`
  padding: 0 2rem;
`

const Title = styled.h1`
  font-family: 'Signika';
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
  justify-content: space-around;
`

const Button = styled.button`
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
`

const WhiteButton = styled.button`
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
`

export default withFirebase(SignIn)
