import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonLoading,
  IonAlert
} from '@ionic/react'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import { doSignOut, db } from '../../firebase/firebase'
import { logout } from '../../reducers/auth'
import useAuthUser from '../../hooks/useAuthUser'
import EventItem from '../../components/EventItem'
import AnimatePresence from '../../components/AnimatePresence'
import { EventItemType, EventType } from '../../types/events'
import { fetchUserEvents, deleteEvent } from '../../reducers/events'
import { showEventDetails } from '../../reducers/event'
import logo from '../../assets/logo/logo-color.svg'
import { EDIT_EVENT, EVENTS } from '../../constants/routes'
import { Styled } from './Account.styles'

const Account: React.FC<RouteComponentProps> = ({ history }) => {
  enum Message {
    EventRemoved = '',
    RemoveConfirm = 'Are you sure you want to delete this event ? This operation cannot be undone.'
  }
  const dispatch: AppDispatch = useDispatch()
  const currentUser = useAuthUser()
  const [currentEventDocId, setEventDocId] = useState<string>('')
  const [showDeleteAlert, setDeleteAlert] = useState(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)

  const deleteEventPermanently = () => {
    db.collection('events')
      .doc(currentEventDocId)
      .delete()
      .then(() => {
        dispatch(deleteEvent(currentEventDocId))
      })
      .catch(error => {
        console.error('Error removing document: ', error)
      })
  }

  const alertCancelBtn = {
    text: 'Cancel',
    role: 'cancel',
    cssClass: 'alert-cancel-btn'
  }

  const alertDeleteBtn = {
    text: 'Delete',
    cssClass: 'alert-action-btn',
    handler: deleteEventPermanently
  }

  const handleDeleteEvent = (eventData: EventType) => {
    setEventDocId(eventData.docId)
    setDeleteAlert(true)
  }

  const handleEditEvent = (eventData: EventType) => {
    dispatch(showEventDetails(eventData))
    history.push(EDIT_EVENT)
  }

  const signOut = async () => {
    try {
      await doSignOut()
      dispatch(logout())
      history.push(EVENTS)
    } catch (error) {
      return console.log('Error', error)
    }
  }

  useEffect(() => {
    db.collection('events').onSnapshot(function() {
      dispatch(fetchUserEvents(currentUser.uid))
        .then(result => {
          setDataFetched(true)
        })
        .catch(error => {
          console.log('Error while fetching the events', error)
        })
    })
  }, [currentUser.uid, dispatch])

  let currentEvents = useTypedSelector(({ events }) => events.userEvents)

  if (!isDataFetched) {
    return (
      <IonLoading
        isOpen={!isDataFetched}
        onDidDismiss={() => setSpinner(!showSpinner)}
        message={'Please wait...'}
        spinner="bubbles"
        duration={500}
      />
    )
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.HeaderWrapper>
            <Styled.Logo src={logo} alt="Eventoo" />
            <Styled.Button onClick={() => signOut()}>logout</Styled.Button>
          </Styled.HeaderWrapper>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AnimatePresence>
          <IonAlert
            isOpen={showDeleteAlert}
            onDidDismiss={() => setDeleteAlert(false)}
            header={'Delete event'}
            message={Message.RemoveConfirm}
            buttons={[alertCancelBtn, alertDeleteBtn]}
          />
          <Styled.Container>
            <Styled.Header>
              <Styled.Avatar src={currentUser ? currentUser.avatar : null} />
              <Styled.MetaContainer>
                <Styled.Name>
                  {currentUser ? currentUser.name : null}
                </Styled.Name>
                <Styled.Email>
                  {currentUser ? currentUser.email : null}
                </Styled.Email>
              </Styled.MetaContainer>
            </Styled.Header>
            <Styled.Title>Your events</Styled.Title>
            <Styled.EventsContainer>
              {currentEvents
                ? currentEvents.map((event: EventItemType, id: number) => {
                    return (
                      <EventItem
                        key={id}
                        docId={event.docId}
                        eventId={event.eventId}
                        title={event.title}
                        localization={event.localization}
                        address={event.address}
                        host={event.host}
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
            </Styled.EventsContainer>
          </Styled.Container>
        </AnimatePresence>
      </IonContent>
    </IonPage>
  )
}

export default Account
