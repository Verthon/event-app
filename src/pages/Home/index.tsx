import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Styled } from './Home.styles'
import { EVENTS } from '../../constants/routes'

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
            <Styled.Hero>
              <Styled.Content>
                <Styled.Title>Explore events</Styled.Title>
                <Styled.Description>
                  Eventoo is a perfect place to build, manage and grow your
                  events.
                </Styled.Description>
                <Styled.Button onClick={() => history.push(EVENTS)}>
                  Explore
                </Styled.Button>
              </Styled.Content>
            </Styled.Hero>
      </IonContent>
    </IonPage>
  )
}

export default Home
