import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Styled } from './Home.styles'
import { EVENTS } from '../../constants/routes'
import bg from '../../assets/backgrounds/main-bg-sm.svg'

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <AnimatePresence>
          <motion.div
            key="homePage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Styled.Content>
              <Styled.Hero src={bg} />
              <Styled.Title>Explore events</Styled.Title>
              <Styled.Description>
                Eventoo is a perfect place to build, manage and grow your
                events.
              </Styled.Description>
              <Styled.Button onClick={() => history.push(EVENTS)}>
                Explore
              </Styled.Button>
            </Styled.Content>
          </motion.div>
        </AnimatePresence>
      </IonContent>
    </IonPage>
  )
}

export default Home
