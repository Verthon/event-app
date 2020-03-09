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
import { useDispatch, useSelector, connect } from 'react-redux'
import styled from 'styled-components'

import { withFirebase } from '../firebase'
import EventItem from '../components/EventItem'
import Category from '../components/Category'
import { eventsSlice } from '../reducers/events'

const Events: React.FC = (props: any) => {
  let [error, setError] = useState(false)
  let [searchVisibility, toggleSearchBar] = useState<boolean>(true)
  let [events, setEvents] = useState([])
  const dispatch = useDispatch()
  let [categories, setCategories] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetched] = useState<boolean>(false)

  useEffect(() => {
    const { db } = props.firebase
    db.collection('events')
      .get()
      .then((querySnapshot: any) => {
        const events: any = []
        querySnapshot.docs.forEach((doc: any) => {
          events.push(doc.data())
        })
        setDataFetched(true)
        //dispatch(eventsSlice.actions.fetchAllEvents(events))
        console.log('events fetched', events)
        return events
      })
      .then((events: any) => setEvents(events))
      .catch(() => {
        return setToast(true)
      })
  }, [])

  useEffect(() => {
    const { db } = props.firebase
    db.collection('categories')
      .get()
      .then((querySnapshot: any) => {
        const categories: any = []
        querySnapshot.docs.forEach((doc: any) => {
          categories.push(doc.data())
        })
        setDataFetched(true)
        console.log('categories fetched', categories)
        return categories
      })
      .then((categories: any) => setCategories(categories))
      .catch(() => {
        return setToast(true)
      })
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
                name="search"
                onClick={() => toggleSearchBar(searchVisibility)}
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
                  name={event.title}
                  localization={event.localization}
                  host={event.host}
                  timestamp={event.date.seconds}
                  date={event.day}
                  time={event.hour}
                  description={event.description}
                  category={event.category}
                  image={event.featuredImage}
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
`

export default withFirebase(Events)
