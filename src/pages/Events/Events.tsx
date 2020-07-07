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

import { fetchAllEvents, filterEventsByCategory } from '../../reducers/events'
import {
  fetchAllCategories,
  setActiveCategory
} from '../../reducers/categories'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import EventItem from '../../components/EventItem/EventItem'
import Category from '../../components/Category/Category'
import { motion, AnimatePresence } from 'framer-motion'
import { EventItemType } from '../../types/events'
import { CategoryData } from '../../types/categories'
import logo from '../../assets/logo/logo-color.svg'
import { Styled } from './Events.styles'
import { useFetchCollection } from '../../hooks/useFetchCollection'
import { pageTransitions } from '../../animations/pageTransitions'

const Events: React.FC = () => {
  let [events, setEvents] = useState([])
  const {
    data: dataEvents,
    isLoading: isLoadingEvents,
    error: errorEvents
  } = useFetchCollection('events', fetchAllEvents)
  const {
    data: dataCat,
    isLoading: isLoadingCat,
    error: errorCat
  } = useFetchCollection('categories', fetchAllCategories)
  const dispatch: AppDispatch = useDispatch()
  let [categories, setCategories] = useState([])
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let currentEvents = useTypedSelector(({ events }) => events.currentEvents)
  let activeCategory = useTypedSelector(
    ({ categories }) => categories.currentCategory
  )

  const filterEvents = (category: string) => {
    if (category === 'All') {
      setSpinner(true)
      dispatch(setActiveCategory(category))
      setEvents(dataEvents)
      return
    }
    dispatch(filterEventsByCategory(category))
    dispatch(setActiveCategory(category))
    setEvents(currentEvents)
  }

  useEffect(() => {
    setEvents(dataEvents)
    setCategories(dataCat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingEvents, isLoadingCat])

  useEffect(() => {
    setEvents(currentEvents)
  }, [currentEvents])

  if (isLoadingCat && isLoadingEvents) {
    return (
      <IonLoading
        isOpen={isLoadingCat && isLoadingEvents && showSpinner}
        onDidDismiss={() => setSpinner(false)}
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
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding-horizontal">
        <AnimatePresence>
          <motion.div
            key="eventsPage"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitions}
          >
            <IonToast
              isOpen={errorCat || errorEvents}
              message="Error occurred while fetching data from our database. Please try again later."
              duration={2000}
            />
            <Styled.CategoriesWrapper>
              {categories &&
                categories.map((category: CategoryData, id: number) => {
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
                })}
            </Styled.CategoriesWrapper>
            <Styled.Title>Upcoming Events</Styled.Title>
            <AnimatePresence>
              {events &&
                events.map((event: EventItemType, id: number) => {
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
                })}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </IonContent>
    </IonPage>
  )
}

export default Events
