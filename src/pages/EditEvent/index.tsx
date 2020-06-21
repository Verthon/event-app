import React, { useState, useEffect } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import { CategoriesList } from '../../types/categories'
import { EventFormType } from '../../types/events'
import EventForm from '../../components/EventForm'
import logo from '../../assets/logo/logo-color.svg'
import { db } from '../../firebase/firebase'
import { validate } from '../../helpers/validate'
import { ADDED_SUCCESSFULLY, ACCOUNT } from '../../constants/routes'
import { setDefaultEventImage } from '../../reducers/events'
import { Styled } from './EditEvent.styles'

const EditEvent: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch: AppDispatch = useDispatch()
  const currentEvent = useTypedSelector(({ event }) => event.event)
  const uid = useTypedSelector(({ auth }) =>
    auth.user !== null ? auth.user.uid : null
  )
  const userEventImage = useTypedSelector(({ events }) => events.userEventImage)
  const [error, setError] = React.useState({
    inputName: '',
    error: ''
  })
  const [form, setForm] = useState<EventFormType>({
    title: currentEvent.title,
    host: currentEvent.host,
    localization: currentEvent.localization,
    address: currentEvent.address,
    description: currentEvent.description,
    categories: [
      CategoriesList.sport,
      CategoriesList.music,
      CategoriesList.education,
      CategoriesList.business,
      CategoriesList.food
    ],
    category: currentEvent.category,
    imageUrl: currentEvent.featuredImage,
    day: currentEvent.day,
    hour: currentEvent.hour
  })

  useEffect(() => {
    setForm({ ...form, [form.imageUrl]: currentEvent })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEvent])

  useEffect(() => {
    if (uid === null) {
      history.push(ACCOUNT)
    }
  }, [uid, history])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
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
      uid: uid
    })
    dispatch(setDefaultEventImage())
    history.push({
      pathname: ADDED_SUCCESSFULLY,
      state: {
        title: 'Event changed.',
        description: 'Your event has been edited successfully.'
      }
    })
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
