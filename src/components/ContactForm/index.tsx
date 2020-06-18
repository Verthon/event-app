import { IonInput, IonItem, IonLabel, IonTextarea } from '@ionic/react'
import React from 'react'
import { Styled } from './ContactForm.styles'

const ContactForm = ({ handleInputChange, handleSubmit, form }) => {
  return (
    <form method="POST" onSubmit={(e) => handleSubmit(e)}>
      <IonItem lines="none">
        <IonLabel position="floating">Name</IonLabel>
        <IonInput
          className="event-input"
          placeholder="name"
          type="text"
          name="name"
          value={form.name}
          onIonChange={e => handleInputChange(e)}
        />
        {/* {error.inputName === 'title' ? (
            <Styled.ErrorMessage>{error.error}</Styled.ErrorMessage>
          ) : null} */}
      </IonItem>
      <IonItem lines="none">
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          className="event-input"
          placeholder="email"
          type="email"
          name="email"
          value={form.email}
          onIonChange={e => handleInputChange(e)}
        />
      </IonItem>
      <IonItem lines="none">
        <IonLabel position="floating">Message</IonLabel>
        <IonTextarea
          className="event-input"
          placeholder="message"
          name="message"
          value={form.message}
          onIonChange={e => handleInputChange(e)}
        />
      </IonItem>
      <Styled.Button type="submit" color="primary">
        Submit
      </Styled.Button>
    </form>
  )
}

export default ContactForm
