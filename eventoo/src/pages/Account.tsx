import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonAlert,
} from '@ionic/react'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { doSignOut, db } from '../firebase/firebase'
import { logout } from '../reducers/auth'
import useAuthUser from '../hooks/useAuthUser'
import EventItem from '../components/EventItem'
import { EventType } from '../types/events'
import { fetchUserEvents, deleteEvent } from '../reducers/events'
import { showEventDetails } from '../reducers/event'
import logo from '../assets/logo/logo-color.svg'
import { EDIT_EVENT } from '../constants/routes'

const Account: React.FC = (props: any) => {
  const dispatch: any = useDispatch()
  const currentUser = useAuthUser()
  const [currentEventDocId, setEventDocId] = useState<string>('')
  const [events, setEvents] = useState([])
  const [showDeleteAlert, setDeleteAlert] = useState(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)

  const deleteEventPermanently = () => {
    db.collection('events')
      .doc(currentEventDocId)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!')
      })
      .catch(function(error) {
        console.error('Error removing document: ', error)
      })
    dispatch(deleteEvent(currentEventDocId))
    //console.log('Event id to be deleted', currentEventDocId)
  }

  const alertCancelBtn = {
    text: 'Cancel',
    role: 'cancel',
    cssClass: 'alert-cancel-btn',
  }

  const alertDeleteBtn = {
    text: 'Delete',
    cssClass: 'alert-action-btn',
    handler: deleteEventPermanently,
  }

  const handleDeleteEvent = (eventData: any) => {
    setEventDocId(eventData.docId)
    setDeleteAlert(true)
  }

  const handleEditEvent = (eventData: any) => {
    dispatch(showEventDetails(eventData))
    props.history.push(EDIT_EVENT)
  }

  const signOut = async () => {
    try {
      await doSignOut()
      console.log(currentUser)
      dispatch(logout())
      props.history.push('/events')
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <HeaderWrapper>
            <Logo src={logo} alt="Eventoo" />
            <Button onClick={() => signOut()}>logout</Button>
          </HeaderWrapper>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAlert
          isOpen={showDeleteAlert}
          onDidDismiss={() => setDeleteAlert(false)}
          header={'Delete event'}
          message={
            'Are you sure you want to delete this event ? This operation cannot be undone.'
          }
          buttons={[alertCancelBtn, alertDeleteBtn]}
        />
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
                      editMode={true}
                      deleteHandler={handleDeleteEvent}
                      editHandler={handleEditEvent}
                    />
                  )
                })
              : null}
          </EventsContainer>
        </Container>
      </IonContent>
    </IonPage>
  )
}

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ion-color-primary);
`

const Container = styled.div`
  padding: 1rem;
  font-family: var(--ion-decorative-font);
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
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.35rem 1.25rem;
  margin: 0 1rem 0 0;
  border-radius: 2px;
  background-color: var(--ion-color-primary);
  color: #ffffff;
`

export default Account
