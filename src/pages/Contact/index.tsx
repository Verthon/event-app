import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import dayjs from 'dayjs'
import { db } from '../../firebase/firebase'
import logo from '../../assets/logo/logo-color.svg'
import ContactForm from '../../components/ContactForm'
import { Styled } from './Contact.styles'

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    createdAt: dayjs().format()
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    const ref = db.collection('messages').doc()
    e.preventDefault()
    console.log('form to be submitted', form, ref)
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
        <ContactForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          form={form}
        />
      </IonContent>
    </IonPage>
  )
}

export default Contact
