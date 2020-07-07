import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Styled } from './Home.styles'
import { EVENTS } from '../../constants/routes'
import { pageTransitions } from '../../animations/pageTransitions'
import bg from '../../assets/backgrounds/main-bg-sm.svg'

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <AnimatePresence>
          <motion.div
            key="homePage"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitions}
            className="homepage-container"
          >
            <Styled.Content>
              <Styled.Hero src={bg} />
              <Styled.Title>Explore events</Styled.Title>
              <Styled.Description>
                Eventoo is a perfect place to build, manage and grow your
                events.
              </Styled.Description>
              <Styled.Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => history.push(EVENTS)}
              >
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
