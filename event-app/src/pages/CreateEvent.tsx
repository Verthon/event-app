import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { withFirebase } from '../firebase'
import { EventModel } from '../interfaces'
const CreateEvents: React.FC = props => {
  const [form, setForm] = useState({
    title: '',
    host: '',
    localization: '',
    description: '',
    categories: ['Sport', 'Music', 'Education', 'Business', 'Food&Drink'],
    category: 'Sport',
    imageUrl: '',
    day: dayjs(),
    hour: '13:00',
    id: 0,
  })

  const handleInputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.currentTarget,
    })
    console.log('form var after change', form);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Eventoo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Create your event</h1>
        <div className="form-container">
          <form
            method="POST"
            className="form-content"
            onSubmit={e => handleSubmit(e)}
          >
            <IonItem>
              <IonLabel position="floating">Event name</IonLabel>
              <IonInput
                placeholder="eg. Football Event"
                type="text"
                name="title"
                required
                value={form.title}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Event host</IonLabel>
              <IonInput
                className="input"
                placeholder="eg. Company"
                type="text"
                name="host"
                required
                value={form.host}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Event localization</IonLabel>
              <IonInput
                placeholder="eg. Bielsko-Biała, Poland"
                type="text"
                name="localization"
                required
                value={form.localization}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Categories</IonLabel>
              <IonSelect
                value={form.category}
                cancelText="Cancel"
                okText="Select"
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

            <IonItem>
              <IonLabel position="floating">Image URL</IonLabel>
              <IonInput
                type="text"
                name="imageUrl"
                placeholder="eg. https://source.unsplash.com/weekly?water"
                value={form.imageUrl}
                onIonChange={e => handleInputChange(e)}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Date</IonLabel>
              <IonDatetime displayFormat="DD.MM" placeholder="Select Date" />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Time</IonLabel>
              <IonDatetime displayFormat="HH:mm" placeholder="Select Time" />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Event Description</IonLabel>
              <IonTextarea placeholder="Event description" />
            </IonItem>

            <IonButton expand="block" type="submit" color="primary">
              Submit
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default withFirebase(CreateEvents)
