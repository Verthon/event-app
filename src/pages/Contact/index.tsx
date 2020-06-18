import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import dayjs from 'dayjs'
import { db } from '../../firebase/firebase'
import { ADDED_SUCCESSFULLY } from '../../constants/routes'
import { validateMessageForm } from '../../helpers/validate'
import logo from '../../assets/logo/logo-color.svg'
import ContactForm from '../../components/ContactForm'
import { Styled } from './Contact.styles'

const Contact: React.FC<RouteComponentProps> = ({ history }) => {
  const initialFormState = {
    name: '',
    email: '',
    message: '',
    createdAt: dayjs().format()
  }
  const initialErrorState = {
    inputName: '',
    error: ''
  }
  const [error, setError] = useState(initialErrorState)
  const [form, setForm] = useState(initialFormState)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formError = validateMessageForm(form)
    if (formError) {
      setError(formError)
      return
    }
    setError(initialErrorState)
    const messagesRef = db.collection('messages').doc()
    messagesRef
      .set({
        ...form
      })
      .then(() => {
        setForm(initialFormState)
        history.push({
          pathname: ADDED_SUCCESSFULLY,
          state: {
            title: 'Message sent successfully',
            description:
              'Thank you for sending message, we will answer as soon as possible.'
          }
        })
      })
      .catch(error => console.log('error while saving to db', error))
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <Styled.Title>About</Styled.Title>
        <Styled.Description>
          Eventoo is a platform, that allows anyone to create, share, find and
          attend events. From music festivals, conferences and community
          meetups, to sport events. Our mission is to connect people with
          passion.
        </Styled.Description>
        <Styled.Title>Contact</Styled.Title>
        <Styled.Description>
          If you have a question or problem, feel free to contact us using form
          below, or email directly at{' '}
          <a href="mailto:eventooinfo@gmail.com">eventooinfo@gmail.com.</a>
        </Styled.Description>
        <ContactForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          form={form}
          error={error}
        />
      </IonContent>
    </IonPage>
  )
}

export default Contact
