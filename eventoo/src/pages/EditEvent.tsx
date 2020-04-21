import React, { useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from '@ionic/react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import logo from '../assets/logo/logo-color.svg'
import { db } from '../firebase/firebase'
import { validate } from '../helpers/validate'
import {EVENT_CHANGED} from '../constants/routes'

const EditEvent: React.FC = ({ history }: any) => {
  const currentEvent = useSelector((state: any) => state.event.event)
  console.log('current Event in editEvent', currentEvent)
  const uid = useSelector((state: any) => state.auth.user.uid)
  const [error, setError] = React.useState({
    inputName: '',
    error: '',
  })
  const [form, setForm] = useState({
    title: currentEvent.title,
    host: currentEvent.host,
    localization: currentEvent.localization,
    address: currentEvent.address,
    description: currentEvent.description,
    categories: ['Sport', 'Music', 'Education', 'Business', 'Food'],
    category: currentEvent.category,
    imageUrl: currentEvent.featuredImage,
    imageFile: '',
    day: currentEvent.day,
    hour: currentEvent.hour,
  })

  const handleInputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formError = validate(form)
    if (formError) {
      setError(formError)
      return
    }
    const eventRef = db.collection('events').doc(currentEvent.docId)
    eventRef.update({
      title: form.title,
      host: form.host,
      localization: form.localization,
      address: form.address,
      description: form.description,
      category: form.category,
      day: form.day,
      hour: form.hour,
      featuredImage: form.imageUrl,
      uid: uid,
      created_at: dayjs().format(),
    })
    return history.push(EVENT_CHANGED)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Title>Edit event</Title>
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
                value={form.title}
                onIonChange={e => handleInputChange(e)}
              />
              {error.inputName === 'title' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Event host</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Company"
                type="text"
                name="host"
                value={form.host}
                onIonChange={e => handleInputChange(e)}
              />
              {error.inputName === 'host' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">City</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Bielsko-Biała, Poland"
                type="text"
                name="localization"
                value={form.localization}
                onIonChange={e => handleInputChange(e)}
              />
              {error.inputName === 'localization' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
            </IonItem>

            <IonItem lines="none">
              <IonLabel position="floating">Address</IonLabel>
              <IonInput
                className="event-input"
                placeholder="eg. Main Street SE 125"
                type="text"
                name="address"
                value={form.address}
                onIonChange={e => handleInputChange(e)}
              />
              {error.inputName === 'address' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
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
                value={form.description}
                onIonChange={e => handleInputChange(e)}
              />
              {error.inputName === 'description' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
            </IonItem>

            <Button type="submit" color="primary">
              Save changes
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Title = styled.h1`
  margin: 1rem;
  font-weight: 600;
  font-size: 1.4rem;
`

const Button = styled.button`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  font-family: var(--ion-decorative-font);
  border-radius: 2px;
  width: 90%;
  background-color: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  margin: 1rem auto;
`

const ErrorMessage = styled.span`
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    50% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    100% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  background: hsl(0, 91%, 95%);
  color: hsl(0, 41%, 40%);
  font-style: italic;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-left: 4px solid hsl(0, 41%, 40%);
  font-size: 0.875rem;
`

export default EditEvent
