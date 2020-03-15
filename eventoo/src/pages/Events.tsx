import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonToast,
  IonLoading,
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { search } from 'ionicons/icons'

import { withFirebase } from '../firebase'
import EventItem from '../components/EventItem'
import Category from '../components/Category'
import { eventsSlice } from '../reducers/events'
import useCategories from '../hooks/useCategories'
import { EVENT_DETAIL } from '../constants/routes'

const Events: React.FC = (props: any) => {
  let [error, setError] = useState(false)
  let [searchVisibility, toggleSearchBar] = useState<boolean>(false)
  let [events, setEvents] = useState([])
  const dispatch = useDispatch()
  let [categories, setCategories] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)

  const displayEventDetail = (e: any, event: any) => {
    e.preventDefault()
    console.log('Event data', event)
    props.history.push(EVENT_DETAIL)
  }

  const handleCategoryChange = () => {}

  useEffect(() => {
    const { db } = props.firebase
    const unsubscribe = db
      .collection('events')
      .get()
      .then((querySnapshot: any) => {
        const events: any = []
        querySnapshot.docs.forEach((doc: any) => {
          events.push(doc.data())
        })
        setDataFetched(true)
        setEvents(events)
        //dispatch(eventsSlice.actions.fetchAllEvents(events))
      })
      .catch(() => {
        setToast(true)
      })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const { db } = props.firebase
    const unsubscribe = db
      .collection('categories')
      .get()
      .then((querySnapshot: any) => {
        const categories: any = []
        querySnapshot.docs.forEach((doc: any) => {
          categories.push(doc.data())
        })
        setDataFetched(true)
        setCategories(categories)
      })
      .catch(() => {
        return setToast(true)
      })
    console.log('categories fetched')
    return () => unsubscribe()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Events</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon
                slot="icon-only"
                icon={search}
                onClick={() => toggleSearchBar(!searchVisibility)}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding-horizontal">
        <IonLoading
          isOpen={!isDataFetched}
          onDidDismiss={() => setSpinner(false)}
          message={'Please wait...'}
          spinner="bubbles"
          duration={500}
        />
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setToast(false)}
          message="Error occured while fetching data from our database. Please try again later."
          duration={2000}
        />
        {searchVisibility ? <IonSearchbar animated debounce={500} /> : null}
        <CategoriesWrapper>
          {categories
            ? categories.map((category, id) => {
                return (
                  <Category
                    key={id}
                    category={category.category}
                    emoji={category.emoji}
                    onClick={handleCategoryChange}
                  />
                )
              })
            : null}
        </CategoriesWrapper>
        {events
          ? events.map((event: any, id: number) => {
              return (
                <EventItem
                  key={id}
                  eventId={event.eventId}
                  name={event.title}
                  localization={event.localization}
                  host={event.host}
                  timestamp={event.date.seconds}
                  date={event.day}
                  time={event.hour}
                  description={event.description}
                  category={event.category}
                  image={event.featuredImage}
                  onClick={(e: HTMLElement) => displayEventDetail(e, event)}
                />
              )
            })
          : null}
      </IonContent>
    </IonPage>
  )
}

const CategoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 1.5rem 0;
`

export default withFirebase(Events)
