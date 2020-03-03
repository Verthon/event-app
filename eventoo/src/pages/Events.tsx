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
  IonLoading
} from '@ionic/react'
import React, { MouseEvent, useState, useEffect } from 'react'
import { withFirebase } from '../firebase'
import EventItem from '../components/EventItem'

const Events: React.FC = (props: any) => {
  let [error, setError] = useState(false);
  let [searchVisibility, toggleSearchBar] = useState<boolean>(true)
  let [events, setEvents] = useState([])
  let [showToast, setToast] = useState<boolean>(false)
  let [showSpinner, setSpinner] = useState<boolean>(true);
  let [isDataFetched, setDataFetched] = useState<boolean>(false);

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
        return events
      })
      .then((events: any) => setEvents(events))
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

      <IonContent>
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
        {events ? events.map((event: any, id: number) => {
          return (
            <EventItem
                key={id}
                name={event.title}
                localization={event.localization}
                host={event.host}
                date={event.day}
                time={event.hour}
                description={event.description}
                category={event.category}
                image={event.featuredImage}
              />
          )
        }): null}
      </IonContent>
    </IonPage>
  )
}

export default withFirebase(Events)
