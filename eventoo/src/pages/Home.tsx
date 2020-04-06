import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import styled from 'styled-components'
//import bg from '../assets/backgrounds/home-bg-sm.svg'
import bg from '../assets/backgrounds/home-sm.svg'

const Home: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonContent>
        <Hero>
          <Content>
            <Title>The journey begins here!</Title>
            <Description>
              Eventoo is a perfect place to build, manage and grow your events.
            </Description>
            <Button onClick={() => props.history.push('/events')}>
              Explore
            </Button>
          </Content>
        </Hero>
      </IonContent>
    </IonPage>
  )
}

const Hero = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  justify-content: flex-end;
`

const Content = styled.article`
  display: flex;
  flex-direction: column;
  color: var(--main-dark);
  justify-content: flex-end;
  align-items: center;
  margin: auto auto 0 auto;
  padding: 0 0 2.75rem 0;
  height: 40%;
  background: #ffffff;
  max-width: 80%;
`
const Title = styled.h1`
  font-family: 'Signika';
  font-weight: 700;
  font-size: 1.75rem;
  margin: 2rem 0 0 0;
`
const Description = styled.p`
  margin: 0.25rem 0;
`
const Button = styled.button`
  font-family: 'Signika';
  font-weight: bold;
  border-radius: 2px;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  margin: 1.5rem 0 0 0;
  padding: 0.5rem 4rem;
`

export default Home
