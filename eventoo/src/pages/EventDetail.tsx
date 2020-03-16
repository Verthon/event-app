import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/react'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { showEventDetails } from '../reducers/event'

const EventDetail = () => {
  const k = {
    eventId: 6,
    name: 'Football Mates',
    host: 'Cocola FC',
    localization: 'Bielsko - Biala',
    category: 'Sport',
    date: 'May 14',
    time: '21:00',
    description: "Let's play 😍",
    image: 'https://source.unsplash.com/Yta-zdP9PVM',
    timestamp: 1558130400,
  }
  const eventData = useSelector((state: any) => state.event.event)
  console.log(eventData)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Event Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Wrapper>
          {eventData ? <Image src={eventData.image} /> : <ImagePlaceholder />}
          <Header>
            <Title>{eventData ? eventData.name : 'Kek'}</Title>
            <Category>{eventData.category}</Category>
          </Header>
          <Date>{eventData.date}</Date>
          <Date>{eventData.time}</Date>
          <Localization>{eventData.localization}</Localization>
          <Description>{eventData.description}</Description>
        </Wrapper>
      </IonContent>
    </IonPage>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`
const ImagePlaceholder = styled.div`
  width: 100%;
  background: var(--ion-color-gray-4);
  min-height: 300px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: var(--ion-color-primary);
`
const Localization = styled.p`
  margin: 0.5rem 0;
  color: var(--ion-text-color);
`
const Date = styled.p`
  margin: 0.5rem 0;
  color: var(--ion-text-color);
`
const Description = styled.p`
  line-height: 1.5;
  margin: 0.5rem 0;
  color: var(--ion-text-color);
`
const Category = styled.span`
  font-size: 0.875rem;
  color: var(--ion-color-primary);
  background-color: hsl(225, 80%, 95%);
  border-radius: 5px;
  padding: 0.15rem 0.5rem;
`

export default EventDetail
