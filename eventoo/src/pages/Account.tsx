import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
} from '@ionic/react'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { doSignOut } from '../firebase/firebase'
import { logout } from '../reducers/auth'
import useAuthUser from '../hooks/useAuthUser'
import EventItem from '../components/EventItem'
import { EventType } from '../types/events'
import {fetchUserEvents} from '../reducers/events'

const Account: React.FC = (props: any) => {
  const dispatch: any = useDispatch()
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

  useEffect(() => {
    dispatch(fetchUserEvents(currentUser.uid))
      .then((result: any) => {
        console.log('fetchAllEvents result', result)
        setDataFetched(true)
        setEvents(result.payload)
      })
      .catch(() => {
        console.log('Error while fetching the events')
      })
  }, [currentUser.uid, dispatch])

  let currentEvents = useSelector((state: any) => state.events.userEvents)
  console.log('current Events in Account', currentEvents)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <IonLoading
            isOpen={!isDataFetched}
            onDidDismiss={() => setSpinner(false)}
            message={'Please wait...'}
            spinner="bubbles"
            duration={500}
          />
          <Header>
            <Avatar src={currentUser ? currentUser.avatar : null} />
            <MetaContainer>
              <Name>{currentUser ? currentUser.name : null}</Name>
              <Email>{currentUser ? currentUser.email : null}</Email>
            </MetaContainer>
          </Header>
          <Title>Your events</Title>
          <EventsContainer>
            {currentEvents
              ? currentEvents.map((event: EventType, id: number) => {
                  return (
                    <EventItem
                      key={id}
                      docId={event.docId}
                      eventId={event.eventId}
                      title={event.title}
                      localization={event.localization}
                      address={event.address}
                      host={event.host}
                      date={event.date}
                      day={event.day}
                      hour={event.hour}
                      description={event.description}
                      category={event.category}
                      featuredImage={event.featuredImage}
                    />
                  )
                })
              : null}
          </EventsContainer>

          <Button onClick={() => signOut()}>logout</Button>
        </Container>
      </IonContent>
    </IonPage>
  )
}

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const Container = styled.div`
  padding: 1rem;
`

const Header = styled.header`
  margin: 1rem 0 3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1.25rem;
`

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
`

const Email = styled.p`
  color: hsl(203, 13%, 44%);
  margin: 0;
`

const EventsContainer = styled.div`
  margin: 1rem 0;
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

export default Account
