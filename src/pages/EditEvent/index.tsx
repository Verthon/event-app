import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/react'
import { useDispatch, useSelector } from 'react-redux'

import EventForm from '../../components/EventForm'
import logo from '../../assets/logo/logo-color.svg'
import { db } from '../../firebase/firebase'
import { validate } from '../../helpers/validate'
import { EVENT_CHANGED, ACCOUNT } from '../../constants/routes'
import { setDefaultEventImage } from '../../reducers/events'
import { Styled } from './EditEvent.styles'

const EditEvent: React.FC = ({ history }: any) => {
  const dispatch: any = useDispatch()
  const currentEvent = useSelector((state: any) => state.event.event)
  const uid = useSelector((state: any) => state.auth.user !== null ? state.auth.user.uid : null)
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

  useEffect(() => {
    if(uid === null) {
      history.push(ACCOUNT)
    }
  }, [uid, history])

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
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Styled.Title>Edit event</Styled.Title>
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

export default EditEvent