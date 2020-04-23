import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from '@ionic/react'
import React, {useState} from 'react'
import styled from 'styled-components'

import UnsplashModal from './UnsplashModal'
import { ActionButtonProps } from '../types/general'

interface IEventForm{
  handleSubmit: any,
  handleInputChange: any,
  form: any,
  error: any,
  userEventImage: string
}

const EventForm = ({
  handleSubmit,
  handleInputChange,
  form,
  error,
  userEventImage
}: IEventForm) => {
  const [showImageModal, setImageModal] = useState<boolean>(false)
  return (
    <Container>
      {showImageModal ? (
      <UnsplashModal
        showModal={showImageModal}
        cancelHandler={setImageModal}
      />
    ) : null}
      <form method="POST" onSubmit={e => handleSubmit(e)}>
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
          <ImageButton type="button" onClick={() => setImageModal(!showImageModal)}>
            Choose image
          </ImageButton>
          <IonInput
            className="event-input"
            type="text"
            name="imageUrl"
            placeholder="eg. https://source.unsplash.com/weekly?water"
            value={userEventImage}
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
          Submit
        </Button>
      </form>
    </Container>
  )
}

const Container = styled.div``

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

const ImageButton = styled.button<ActionButtonProps>`
  margin: 0.75rem 0 0 0;
  font-family: var(--ion-decorative-font);
  padding: 0.45rem 1rem;
  border-radius: 2px;
  color: #ffffff;
  background-color: var(--ion-color-primary);
  font-size: 1rem;
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

export default EventForm
