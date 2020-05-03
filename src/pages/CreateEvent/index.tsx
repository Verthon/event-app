import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import dayjs from 'dayjs'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { AppDispatch } from '../../store'
import { EventFormType } from '../../types/events'
import { CategoriesList } from '../../types/categories'
import EventForm from '../../components/EventForm'
import { db } from '../../firebase/firebase'
import logo from '../../assets/logo/logo-color.svg'
import { validate } from '../../helpers/validate'
import { EVENT_CREATED } from '../../constants/routes'
import { setDefaultEventImage } from '../../reducers/events'
import { Styled } from './CreateEvent.styles'

const CreateEvents: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch: AppDispatch = useDispatch()
  const uid = useTypedSelector(({ auth }) => auth.user.uid)
  const userEventImage = useTypedSelector(({ events }) => events.userEventImage)
  const [error, setError] = React.useState({
    inputName: '',
    error: '',
  })
  const [form, setForm] = useState<EventFormType>({
    title: '',
    host: '',
    localization: '',
    address: '',
    description: '',
    categories: [
      CategoriesList.sport,
      CategoriesList.music,
      CategoriesList.education,
      CategoriesList.business,
      CategoriesList.food,
    ],
    category: CategoriesList.sport,
    imageUrl: '',
    day: dayjs().format('YYYY-MM-DD'),
    hour: '13:00',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      created_at: dayjs().format(),
    })
    dispatch(setDefaultEventImage())
    return history.push(EVENT_CREATED)
  }

  return (
    <IonPage>
      <IonHeader color="primary">
        <IonToolbar color="light">
          <Styled.Logo src={logo} alt="Eventoo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Styled.Title>Create event</Styled.Title>
        <EventForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          form={form}
          error={error}
          userEventImage={userEventImage}
        />
      </IonContent>
    </IonPage>
  )
}

export default CreateEvents
