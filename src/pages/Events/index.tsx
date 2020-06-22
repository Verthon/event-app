import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonToast,
  IonLoading
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { fetchAllEvents, filterEventsByCategory } from '../../reducers/events'
import {
  fetchAllCategories,
  setActiveCategory
} from '../../reducers/categories'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import EventItem from '../../components/EventItem'
import Category from '../../components/Category'
import { EventItemType } from '../../types/events'
import { CategoryData } from '../../types/categories'
import logo from '../../assets/logo/logo-color.svg'
import { db } from '../../firebase/firebase'
import { Styled } from './Events.styles'
import { pageTransitions } from '../../animations/pageTransitions'

const Events: React.FC = () => {
  let [events, setEvents] = useState([])
  const dispatch: AppDispatch = useDispatch()
  let [categories, setCategories] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)
  let currentEvents = useTypedSelector(({ events }) => events.currentEvents)
  let activeCategory = useTypedSelector(
    ({ categories }) => categories.currentCategory
  )

  const filterEvents = (category: string) => {
    if (category === 'All') {
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
    // setDataFetched(false)
    // setSpinner(true)
    setEvents(currentEvents)
  }

  useEffect(() => {
    db.collection('events').onSnapshot(() => {
      dispatch(fetchAllEvents())
        .then((result: any) => {
          setDataFetched(true)
          setEvents(result.payload)
        })
        .catch(() => {
          setToast(true)
        })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setEvents(currentEvents)
  }, [currentEvents])

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
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding-horizontal">
        <motion.div initial="exit" animate="enter" exit="exit">
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
            message="Error occurred while fetching data from our database. Please try again later."
            duration={2000}
          />
          <motion.div variants={pageTransitions}>
            <Styled.CategoriesWrapper>
              {categories
                ? categories.map((category: CategoryData, id: number) => {
                    return (
                      <Category
                        key={id}
                        category={category.category}
                        emoji={category.emoji}
                        filterFunction={() => filterEvents(category.category)}
                        active={
                          activeCategory === category.category ? true : false
                        }
                      />
                    )
                  })
                : null}
            </Styled.CategoriesWrapper>
            <Styled.Title>Upcoming Events</Styled.Title>
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
          </motion.div>
        </motion.div>
      </IonContent>
    </IonPage>
  )
}

export default Events
