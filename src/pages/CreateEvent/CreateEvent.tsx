import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import dayjs from 'dayjs'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import { EventFormType } from '../../types/events'
import EventForm from '../../components/EventForm/EventForm'
import { motion, AnimatePresence } from 'framer-motion'
import { db } from '../../firebase/firebase'
import logo from '../../assets/logo/logo-color.svg'
import { validate } from '../../helpers/validate'
import { ADDED_SUCCESSFULLY } from '../../constants/routes'
import { setDefaultEventImage } from '../../reducers/events'
import { createEventInitialState } from '../../constants/events'
import { Styled } from './CreateEvent.styles'

const CreateEvent: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch: AppDispatch = useDispatch()
  const uid = useTypedSelector(({ auth }) => auth.user.uid)
  const userEventImage = useTypedSelector(({ events }) => events.userEventImage)
  const [error, setError] = useState({
    inputName: '',
    error: ''
  })
  const [form, setForm] = useState<EventFormType>(createEventInitialState)

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
      featuredImage: userEventImage,
      uid: uid,
      created_at: dayjs().format()
    })
    dispatch(setDefaultEventImage())
    setForm(createEventInitialState)
    history.push({
      pathname: ADDED_SUCCESSFULLY,
      state: {
        title: 'Event created',
        description:
          'Your event has been successfully added and is available on events page.'
      }
    })
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AnimatePresence>
          <motion.div key="createEventPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Styled.Title>Create event</Styled.Title>
            <EventForm
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              form={form}
              error={error}
              userEventImage={userEventImage}
            />
          </motion.div>
        </AnimatePresence>
      </IonContent>
    </IonPage>
  )
}

export default CreateEvent
