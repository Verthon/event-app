import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/react'
import React from 'react'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo/logo-color.svg'
import { EventType } from '../../types/events'
import { Styled } from './EventDetail.styles'

const EventDetail = () => {
  const eventData: EventType = useSelector((state: any) => state.event.event)
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
        <Styled.Wrapper>
          {eventData ? (
            <Styled.Image src={eventData.featuredImage} />
          ) : (
            <Styled.ImagePlaceholder />
          )}
          <Styled.Title>{eventData ? eventData.title : ''}</Styled.Title>
          <Styled.InfoWrapper>
            <Styled.LocationIcon />
            <Styled.EntryWrapper>
              <Styled.Localization>
                {eventData ? eventData.localization : ''}
              </Styled.Localization>
              <Styled.Street>{eventData ? eventData.address : ''}</Styled.Street>
            </Styled.EntryWrapper>
          </Styled.InfoWrapper>
          <Styled.InfoWrapper>
            <Styled.DateIcon />
            <Styled.EntryWrapper>
              <Styled.Date>{eventData ? eventData.day : ''}</Styled.Date>
              <Styled.Time>{eventData ? eventData.hour : ''}</Styled.Time>
            </Styled.EntryWrapper>
          </Styled.InfoWrapper>
          <Styled.Separator />
          <Styled.Label>Description</Styled.Label>
          <Styled.Description>{eventData ? eventData.description : ''}</Styled.Description>
        </Styled.Wrapper>
      </IonContent>
    </IonPage>
  )
}

export default EventDetail