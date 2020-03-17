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

import dateIcon from '../assets/icons/date_range.svg'
import locationIcon from '../assets/icons/location_on.svg'
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
          <Title>{eventData ? eventData.name : ''}</Title>
          <InfoWrapper>
            <Icon src={locationIcon} />
            <EntryWrapper>
              <Localization>
                {eventData.localization ? eventData.localization : ''}
              </Localization>
            </EntryWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <Icon src={dateIcon} />
            <EntryWrapper>
              <Date>{eventData.date ? eventData.date : ''}</Date>
              <Time>{eventData.time ? eventData.time : ''}</Time>
            </EntryWrapper>
          </InfoWrapper>
          <Description>
            {eventData.description ? eventData.description : ''}
          </Description>
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
  border-radius: 5px;
`
const InfoWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`
const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: var(--ion-color-primary);
`
const Icon = styled.img`
  width: 1rem;
  align-self: flex-start;
  margin: 0 1rem 0 0;
`
const Localization = styled.p`
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  color: var(--ion-color-primary);
`
const Street = styled.p`
  color: var(--ion-text-color);
`
const Date = styled.time`
  color: var(--ion-color-primary);
  margin: 0 0 0.5rem 0;
`
const Time = styled.time`
  display: block;
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
