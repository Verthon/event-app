import {
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonTextarea,
} from '@ionic/react'
import React, { useState } from 'react'

import UnsplashModal from '../UnsplashModal'
import { Styled } from './EventForm.styles'

interface IEventForm {
  handleSubmit: any
  handleInputChange: any
  form: any
  error: any
  userEventImage: string
}

const EventForm = ({
  handleSubmit,
  handleInputChange,
  form,
  error,
  userEventImage,
}: IEventForm) => {
  const [showImageModal, setImageModal] = useState<boolean>(false)
  return (
    <>
      {showImageModal ? (
        <UnsplashModal
          showModal={showImageModal}
          cancelHandler={setImageModal}
        />
      ) : null}
      <form
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
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
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
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
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
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
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
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
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
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
            {form.categories.map((cat, id: number) => {
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
          <Styled.ImageButton
            type="button"
            onClick={() => setImageModal(!showImageModal)}
          >
            Choose image
          </Styled.ImageButton>
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
            onIonChange={(e: CustomEvent<any>) => handleInputChange(e)}
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
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
          ) : null}
        </IonItem>

        <Styled.Button type="submit" color="primary">
          Submit
        </Styled.Button>
      </form>
    </>
  )
}

export default EventForm
