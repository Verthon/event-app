import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
  IonToast,
} from '@ionic/react'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import { withFirebase } from '../firebase'
//import { EventModel } from '../interfaces'
const CreateEvents: React.FC = (props: any) => {
  const [form, setForm] = useState({
    title: '',
    host: '',
    localization: '',
    description: '',
    categories: ['Sport', 'Music', 'Education', 'Business', 'Food'],
    category: 'Sport',
    imageUrl: '',
    day: dayjs()
      .add(1, 'day')
      .format('YYYY-MM-DD'),
    hour: '13:00',
    id: 0,
  })

  let [showToast, setToast] = useState<boolean>(false)

  const handleInputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    console.log('form after change with', form)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eventRef = props.firebase.db.collection('events').doc()
    eventRef.set({
      title: form.title,
      host: form.host,
      localization: form.localization,
      description: form.description,
      category: form.category,
      day: form.day,
      hour: form.hour,
      featuredImage: form.imageUrl,
      uid: props.firebase.auth.currentUser.uid,
      created_at: dayjs().format(),
    })
    return setToast(true)

    //implement next step here, whether show summary or navigate to account?
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setToast(false)}
          message="Event Added succesfully"
          duration={1500}
        />
        <Title>Create event</Title>
        <div className="form-container">
          <form
            method="POST"
            className="form-content"
            onSubmit={e => handleSubmit(e)}
          >
            <IonItem lines="none">
              <IonLabel position="floating">Event name</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Football Event"
                type="text"
                name="title"
                required
                value={form.title}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Event host</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Company"
                type="text"
                name="host"
                required
                value={form.host}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Event localization</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Bielsko-Biała, Poland"
                type="text"
                name="localization"
                required
                value={form.localization}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Categories</IonLabel>
              <IonSelect
                className="event-input"
                value={form.category}
                cancelText="Cancel"
                okText="Select"
                name="category"
                onIonChange={e => handleInputChange(e)}
              >
                {form.categories.map((cat, id) => {
                  return (
                    <IonSelectOption key={id} value={cat}>
                      {cat}
                    </IonSelectOption>
                  )
                })}
              </IonSelect>
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Image URL</IonLabel>
              <IonInput
                className="event-input"
                type="text"
                name="imageUrl"
                placeholder="eg. https://source.unsplash.com/weekly?water"
                value={form.imageUrl}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Date</IonLabel>
              <IonDatetime
                className="event-input"
                max="2020"
                min={form.day}
                value={form.day}
                name="day"
                displayFormat="DD.MMM"
                placeholder="Select Date"
                onIonChange={(e: any) => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Time</IonLabel>
              <IonDatetime
                value={form.hour}
                name="hour"
                displayFormat="HH:mm"
                placeholder="Select Time"
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Event Description</IonLabel>
              <IonTextarea
                className="event-input"
                cols={10}
                rows={10}
                placeholder="Event description"
                name="description"
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

const Title = styled.h1`
  margin: 1rem 1rem;
`
const Button = styled.button`
  font-weight: bold;
  font-size: 1rem;
  border-radius: 2px;
  width: 75%;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  margin: 1rem auto;
`;

export default withFirebase(CreateEvents)
