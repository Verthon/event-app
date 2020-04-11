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

import { fetchAllEvents, filterEventsByCategory } from '../reducers/events'
import { fetchAllCategories } from '../reducers/categories'
import EventItem from '../components/EventItem'
import Category from '../components/Category'
import { IEventsState } from '../reducers/events'
import { EventType, EventItemType } from '../types/events'

const Events: React.FC = () => {
  let [searchVisibility, toggleSearchBar] = useState<boolean>(false)
  let [events, setEvents] = useState([])
  const dispatch: any = useDispatch()
  let [categories, setCategories] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)
  let currentEvents = useSelector((state: any) => state.events.events)

  const filterEvents = (category: string) => {
    dispatch(filterEventsByCategory(category))
    setDataFetched(false)
    setSpinner(true)
    setEvents(currentEvents)
    console.log('events state', events)
  }

  useEffect(() => {}, [events])

  useEffect(() => {
    dispatch(fetchAllEvents())
      .then((result: any) => {
        console.log('fetchAllEvents result', result)
        setDataFetched(true)
        setEvents(result.payload)
      })
      .catch(() => {
        setToast(true)
      })
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllCategories())
      .then((result: any) => {
        console.log('fetchAllCategories result', result)
        setDataFetched(true)
        setCategories(result.payload)
      })
      .catch(() => {
        setToast(true)
      })
  }, [dispatch])

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
          isOpen={!isDataFetched && showSpinner}
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
                    filterFunction={() => filterEvents(category.category)}
                  />
                )
              })
            : null}
        </CategoriesWrapper>
        {events
          ? events.map((event: EventType, id: number) => {
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
      </IonContent>
    </IonPage>
  )
}

const CategoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 1.5rem 0;
`

export default Events
