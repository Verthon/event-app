import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import EventForm from '../components/EventForm'
import logo from '../assets/logo/logo-color.svg'
import { db } from '../firebase/firebase'
import { validate } from '../helpers/validate'
import { EVENT_CHANGED } from '../constants/routes'
import { setDefaultEventImage } from '../reducers/events'

const EditEvent: React.FC = ({ history }: any) => {
  const dispatch: any = useDispatch()
  const currentEvent = useSelector((state: any) => state.event.event)
  const uid = useSelector((state: any) => state.auth.user.uid)
  const userEventImage = useSelector(
    (state: any) => state.events.userEventImage
  )
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
    day: currentEvent.day,
    hour: currentEvent.hour,
  })

  useEffect(() => {
    setForm({ ...form, [form.imageUrl]: currentEvent })
  }, [currentEvent])

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
      featuredImage: userEventImage === '' ? form.imageUrl : userEventImage,
      uid: uid,
    })
    dispatch(setDefaultEventImage())
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
        <EventForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          form={form}
          error={error}
          userEventImage={
            userEventImage === '' ? form.imageUrl : userEventImage
          }
        />
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

export default EditEvent
