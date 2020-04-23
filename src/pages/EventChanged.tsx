import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import styled from 'styled-components'
import logo from '../assets/logo/logo-color.svg'
import { ReactComponent as Icon } from '../assets/illustrations/edit.svg'
import { ACCOUNT } from '../constants/routes'

const EventChanged: React.FC = ({ history }: any) => {
  const navigateToHome = () => {
    history.push(ACCOUNT)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Wrapper>
          <CheckIcon />
          <Title>Event Changed</Title>
          <p>Your event has been edited succesfully.</p>
          <Button onClick={navigateToHome}>Back To Account</Button>
        </Wrapper>
      </IonContent>
    </IonPage>
  )
}

const Wrapper = styled.div`
  padding: 1rem 2rem;
`

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const CheckIcon = styled(Icon)`
  .secondary-color-gradient {
    stop-color: #7fd1ae !important;
  }
  .secondary-color {
    fill: #7fd1ae;
  }
  .primary-sketch {
    fill: var(--ion-color-primary);
  }
  .secondary-sketch {
    fill: var(--ion-color-primary);
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
`

const Button = styled.button`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--ion-decorative-font);
  border-radius: 2px;
  width: 100%;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  margin: 1rem auto;
`

export default EventChanged
