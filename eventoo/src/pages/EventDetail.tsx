import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const EventDetail = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Event Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <h1>Event detail view</h1>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default EventDetail
