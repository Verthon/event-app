import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonLoading,
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withFirebase } from '../firebase'
import EventItem from '../components/EventItem'

const Account: React.FC = (props: any) => {
  const [events, setEvents] = useState([])
  const [show, setShow] = useState(false)
  const [authUser, setAuthUser] = useState(null)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)

  const handleAuth = (authUser: any) => {
    setAuthUser(authUser)
  }

  const signOut = () => {
    props.firebase.doSignOut()
    props.history.push('/')
  }

  useEffect(() => {
    const listener = props.firebase.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        handleAuth(authUser)
        if (authUser !== null) {
          const { db } = props.firebase
          db.collection('events')
            .where('uid', '==', props.firebase.auth.currentUser.uid)
            .get()
            .then((querySnapshot: any) => {
              const events: any = []
              querySnapshot.docs.forEach((doc: any) => {
                events.push(doc.data())
              })
              //Check if array is empty
              if (events.length > 0) {
                return setEvents(events)
              }
              return setEvents([])
            })
        }
      } else {
        props.history.push('/login')
      }
    })
    return () => listener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('authUser var', authUser)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={!isDataFetched}
          onDidDismiss={() => setSpinner(false)}
          message={'Please wait...'}
          spinner="bubbles"
          duration={500}
        />
        {/* <Avatar src={ authUser ? authUser.photoURL : null}/> */}
        <Button onClick={signOut}>logout</Button>
      </IonContent>
    </IonPage>
  )
}

const Avatar = styled.img`
  border: 1px solid var(--ionic-color-primary);
  border-radius: 50%;
  max-width: 75px;
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

export default withFirebase(Account)
