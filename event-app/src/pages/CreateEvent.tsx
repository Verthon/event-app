import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

const CreateEvents: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    host: '',
    localization: '',
    description: '',
    categories: ['Sport', 'Music', 'Education', 'Business', 'Food&Drink'],
    category: 'Sport',
    imageUrl: '',
    day: dayjs(),
    hour: '13:00',
    id: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.currentTarget,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Create an event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <section>
        <h1>Create event page</h1>
        <div className="form-container">
          <form action="" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="title">Event name</label>
            <input
              placeholder="eg. Football Event"
              type="text"
              name="title"
              required
              value={form.title}
              onChange={e => handleInputChange(e)}
            />
            <label htmlFor="host">event host</label>
            <input
              className="input"
              placeholder="eg. Company"
              type="text"
              name="host"
              required
              value={form.host}
              onChange={e => handleInputChange(e)}
            />
            <label htmlFor="localization">event localization</label>
            <input
              placeholder="eg. Bielsko-Biała, Poland"
              type="text"
              name="localization"
              required
              value={form.localization}
              onChange={e => handleInputChange(e)}
            />

            <label htmlFor="category">categories</label>
            <select
              name="category"
              id=""
              value={form.category}
              onChange={e => handleInputChange(e)}
              required
            >
              {form.categories.map((cat, id) => {
                return (
                  <option key={id} value={cat}>
                    {cat}
                  </option>
                )
              })}
            </select>
          </form>
        </div>
      </section>
      <IonContent />
    </IonPage>
  )
}

export default CreateEvents
