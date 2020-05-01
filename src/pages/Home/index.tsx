import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import {Styled} from './Home.styles'

const Home: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonContent>
        <Styled.Hero>
          <Styled.Content>
            <Styled.Title>Explore events</Styled.Title>
            <Styled.Description>
              Eventoo is a perfect place to build, manage and grow your events.
            </Styled.Description>
            <Styled.Button onClick={() => props.history.push('/events')}>
              Explore
            </Styled.Button>
          </Styled.Content>
        </Styled.Hero>
      </IonContent>
    </IonPage>
  )
}

export default Home