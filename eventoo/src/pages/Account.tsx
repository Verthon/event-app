import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
} from '@ionic/react'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db, auth, doSignOut } from '../firebase/firebase'
import { logout } from '../reducers/auth'
import useAuthUser from '../hooks/useAuthUser'
//import EventItem from '../components/EventItem'

const Account: React.FC = (props: any) => {
  const dispatch = useDispatch()
  const currentUser = useAuthUser()
  console.log('Auth user object in Account useEffect', currentUser)
  const [events, setEvents] = useState([])
  const [show, setShow] = useState(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)
  const signOut = async () => {
    try {
      await doSignOut()
      console.log(currentUser)
      dispatch(logout())
      return props.history.push('/events')
    } catch (error) {
      return console.log('Error', error)
    }
  }

  // useEffect(() => {
  //   console.log('Auth user object in Account useEffect', currentUser)
  //   if (currentUser !== undefined && currentUser !== null && currentUser) {
  //     const unsubscribe = db
  //       .collection('events')
  //       .get()
  //       .then((querySnapshot: any) => {
  //         const events: any = []
  //         querySnapshot.docs.forEach((doc: any) => {
  //           const data = doc.data()
  //           data.docId = doc.id
  //           events.push(data)
  //         })
  //         setEvents(events)
  //         setDataFetched(true)
  //       })
  //       .catch((error: any) => {
  //         return console.log('Error with fetching events', error)
  //       })
  //     return () => unsubscribe
  //   } else {
  //     props.history.push('/login')
  //   }
  // }, [currentUser])

  // useEffect(() => {
  //   const listener = props.firebase.auth.onAuthStateChanged((authUser: any) => {
  //     if (authUser) {
  //       if (authUser !== null) {
  //         const { db } = props.firebase
  //         db.collection('events')
  //           .where('uid', '==', props.firebase.auth.currentUser.uid)
  //           .get()
  //           .then((querySnapshot: any) => {
  //             const events: any = []
  //             querySnapshot.docs.forEach((doc: any) => {
  //               events.push(doc.data())
  //             })
  //             //Check if array is empty
  //             if (events.length > 0) {
  //               return setEvents(events)
  //             }
  //             return setEvents([])
  //           })
  //       }
  //     } else {
  //       props.history.push('/login')
  //     }
  //   })
  //   return () => listener()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonLoading
          isOpen={!isDataFetched}
          onDidDismiss={() => setSpinner(false)}
          message={'Please wait...'}
          spinner="bubbles"
          duration={500}
        /> */}
        <p>KEK</p>
        {/* <Avatar src={authUser ? authUser.photoURL : null} />
        <Name>{authUser ? authUser.displayName : null}</Name> */}

        <Button onClick={() => signOut()}>logout</Button>
      </IonContent>
    </IonPage>
  )
}

const Avatar = styled.img`
  border: 1px solid var(--ionic-color-primary);
  border-radius: 50%;
  max-width: 75px;
`

const Name = styled.p`
  margin: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
`

const Email = styled.p``

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

export default Account
