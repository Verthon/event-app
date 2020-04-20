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

import { ReactComponent as DateRangeIcon } from '../assets/icons/date_range.svg'
import { ReactComponent as LocationOnIcon } from '../assets/icons/location_on.svg'
import logo from '../assets/logo/logo-color.svg'
import { EventType } from '../types/events'

const EventDetail = () => {
  const eventData: EventType = useSelector((state: any) => state.event.event)
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
        <Wrapper>
          {eventData ? (
            <Image src={eventData.featuredImage} />
          ) : (
            <ImagePlaceholder />
          )}
          <Title>{eventData ? eventData.title : ''}</Title>
          <InfoWrapper>
            <LocationIcon />
            <EntryWrapper>
              <Localization>
                {eventData ? eventData.localization : ''}
              </Localization>
              <Street>{eventData ? eventData.address : ''}</Street>
            </EntryWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <DateIcon />
            <EntryWrapper>
              <Date>{eventData ? eventData.day : ''}</Date>
              <Time>{eventData ? eventData.hour : ''}</Time>
            </EntryWrapper>
          </InfoWrapper>
          <Separator />
          <Label>Description</Label>
          <Description>{eventData ? eventData.description : ''}</Description>
        </Wrapper>
      </IonContent>
    </IonPage>
  )
}

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

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
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0 2rem 0;
  color: var(--ion-color-primary);
`
const LocationIcon = styled(LocationOnIcon)`
  width: 1rem;
  align-self: flex-start;
  margin: 0 1rem 0 0;

  #Primary-Color {
    fill: var(--ion-color-primary)
  }

  #Secondary-Color {
    fill: #fff;
  }
`

const DateIcon = styled(DateRangeIcon)`
  width: 1rem;
  align-self: flex-start;
  margin: 0 1rem 0 0;

  #Primary-Color {
    fill: var(--ion-color-primary)
  }

  #Secondary-Color {
    fill: #fff;
  }
`
const Localization = styled.p`
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  color: var(--ion-color-primary);
`
const Street = styled.p`
  margin: 0;
  color: hsl(203,13%,44%);
`
const Date = styled.time`
  color: var(--ion-color-primary);
  margin: 0 0 0.5rem 0;
`
const Time = styled.time`
  display: block;
  color: hsl(203,13%,44%);
`

const Label = styled.h2`
  margin: 1rem 0 0.5rem 0;
  color: var(--ion-color-primary);
  font-weight: 500;
  font-size: 1rem;
`
const Description = styled.p`
  line-height: 1.5;
  margin: 0.25rem 0;
  color: hsl(203, 13%, 44%);
`
const Category = styled.span`
  font-size: 0.875rem;
  color: var(--ion-color-primary);
  background-color: hsl(225, 80%, 95%);
  border-radius: 5px;
  padding: 0.15rem 0.5rem;
`

const Separator = styled.hr`
  margin: 2rem 0;
  background-color: var(--ion-color-gray-4);
`

export default EventDetail
