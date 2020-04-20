import {
  IonContent,
  IonHeader,
  IonPage,
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
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Unsplash from 'unsplash-js'
import { db, storage } from '../firebase/firebase'
import logo from '../assets/logo/logo-color.svg'

const CreateEvents: React.FC = (props: any) => {
  const uid = useSelector((state: any) => state.auth.user.uid)
  const [error, setError] = React.useState({
    inputName: '',
    error: '',
  })
  const [form, setForm] = useState({
    title: '',
    host: '',
    localization: '',
    address: '',
    description: '',
    categories: ['Sport', 'Music', 'Education', 'Business', 'Food'],
    category: 'Sport',
    imageUrl: '',
    imageFile: '',
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
  }

  const validate = (form: any) => {
    if (form.title.length < 5) {
      return {
        inputName: 'title',
        error: 'Event title should have at least 6 characters',
      }
    } else if (form.host < 5) {
      return {
        inputName: 'host',
        error: 'Event host should have at least 6 characters',
      }
    } else if (form.localization < 3) {
      return {
        inputName: 'localization',
        error: 'Event localization should have at least 4 characters',
      }
    } else if (form.address < 5) {
      return {
        inputName: 'address',
        error: 'Event address should have at least 6 characters',
      }
    } else if (form.description < 10) {
      return {
        inputName: 'description',
        error: 'Event description should have at least 10 characters',
      }
    }
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formError = validate(form)
    if (formError) {
      setError(formError)
      return
    }
    const eventRef = db.collection('events').doc()
    eventRef.set({
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
    return setToast(true)
  }

  const handleFileUpload = (e: any) => {
    console.log('event', e.target.files[0])
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar color="light">
          <Logo src={logo} alt="Eventoo" />
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

            <FileUpload>
              <FileUploadLabel>Image upload</FileUploadLabel>
              <input
                type="file"
                name="imageUpload"
                accept="image/jpeg image/jpg"
                value={form.imageFile}
                onChange={e => handleFileUpload(e)}
              />
            </FileUpload>

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
              {error.inputName === 'description' ? (
                <ErrorMessage>{error.error}</ErrorMessage>
              ) : null}
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

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Title = styled.h1`
  margin: 1rem 1rem 2rem 1rem;
  font-weight: 600;
  font-size: 1.5rem;
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

const FileUpload = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const FileUploadLabel = styled.div`
  font-size: 0.875rem;
  margin: 0 0 1rem 0;
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

export default CreateEvents
