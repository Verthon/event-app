import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonToast,
  IonLoading,
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchAllEvents, filterEventsByCategory } from '../reducers/events'
import { fetchAllCategories, setActiveCategory } from '../reducers/categories'
import EventItem from '../components/EventItem'
import Category from '../components/Category'
import { IEventsState } from '../reducers/events'
import { EventItemType } from '../types/events'
import logo from '../assets/logo/logo-color.svg'

const Events: React.FC = () => {
  let [events, setEvents] = useState([])
  const dispatch: any = useDispatch()
  let [categories, setCategories] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)
  let currentEvents = useSelector((state: any) => state.events.events)
  let activeCategory = useSelector((state: any) => state.categories.currentCategory)

  const filterEvents = (category: string) => {
    if(category === 'All') {
      setDataFetched(false)
      setSpinner(true)
      dispatch(setActiveCategory(category))
      dispatch(fetchAllEvents())
      .then((result: any) => {
        setDataFetched(true)
        setEvents(result.payload)
      })
      .catch(() => {
        setToast(true)
      })
      return events
    }
    dispatch(filterEventsByCategory(category))
    dispatch(setActiveCategory(category))
    setDataFetched(false)
    setSpinner(true)
    setEvents(currentEvents)
  }

  useEffect(() => {
    setEvents(currentEvents)
  }, [currentEvents])

  useEffect(() => {
    dispatch(fetchAllEvents())
      .then((result: any) => {
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
          <Logo src={logo} alt="Eventoo" />
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
        <CategoriesWrapper>
          {categories
            ? categories.map((category, id) => {
                return (
                  <Category
                    key={id}
                    category={category.category}
                    emoji={category.emoji}
                    filterFunction={() => filterEvents(category.category)}
                    active={activeCategory === category.category ? true : false}
                  />
                )
              })
            : null}
        </CategoriesWrapper>
        <Title>Upcoming Events</Title>
        {events
          ? events.map((event: EventItemType, id: number) => {
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
                  editMode={false}
                />
              )
            })
          : null}
      </IonContent>
    </IonPage>
  )
}

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Title = styled.h1`
font-family: var(--ion-decorative-font);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ion-color-primary);
  margin: 2rem 0 1rem 0;
`

const CategoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: var(--ion-decorative-font);
`

export default Events
