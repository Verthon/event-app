import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { IonModal, IonContent, IonLoading } from '@ionic/react'
import styled from 'styled-components'

import {setUserEventImage} from '../reducers/events'
import { unsplash } from '../constants/api'
import {ActionButtonProps} from '../types/general'


interface ImageProps {
  key: string,
  src: string,
  alt: string,
  onClick: any
}

const UnsplashModal = ({ showModal, cancelHandler }: any) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const [query, setQuery] = useState<string>('')
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetching] = useState<boolean>(true)
  let [eventImage, setEventImage] = useState<string>('')

  const setActiveEventImage = (url: string) => {
    //set css class
    setEventImage(url)
  }
  const submitEventImage = (url: string) => {
    dispatch(setUserEventImage(url))
  }
  const handleInputChange = (e: any) => {
    setQuery(e.target.value)
  }
  const handleImageSearch = () => {
    setDataFetching(false)
    setSpinner(true)
    unsplash.search
      .photos(query, 1, 10, { orientation: 'landscape' })
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map((entry: any) => ({
          alt_description: entry.alt_description,
          urls: entry.urls,
          id: entry.id
        }))
        setDataFetching(true)
        setSpinner(false)
        return setImages(formattedData)
      })
      .catch(error =>
        console.log('Error occured while fetching the photos', error)
      )
  }
  return (
    <IonContent>
      <IonLoading
        isOpen={!isDataFetched && showSpinner}
        onDidDismiss={() => setSpinner(false)}
        message={'Please wait...'}
        spinner="bubbles"
      />
      <IonModal isOpen={showModal}>
        <Wrapper>
          <Title>Image selection</Title>
          <Description>
            Eventoo is using Unsplash API to provide best quality image
            selection. Please use the input below to search the image for yout
            event using desired category.
          </Description>
          <Label>Image category</Label>
          <Input
            type="text"
            value={query}
            onChange={e => handleInputChange(e)}
            placeholder="Image category eg. Education"
          />
          <Button onClick={handleImageSearch}>Get Images</Button>
          {images.length > 0 ? (
            <ImagesSection>
              <Title>Unsplash images</Title>
              <Description>
                You can choose only one image, by clicking on image it will be
                added to your event.
              </Description>
              <ImagesWrapper>
                {images
                  ? images.map((image: any) => (
                      <Image
                        key={image.id}
                        src={image.urls.small}
                        alt={image.alt_description}
                        onClick={() => setActiveEventImage(image.urls.small)}
                      />
                    ))
                  : null}
              </ImagesWrapper>
            </ImagesSection>
          ) : null}
        </Wrapper>
        <Footer>
          <CancelButton onClick={() => cancelHandler(false)}>Cancel</CancelButton>
          <Button onClick={() => submitEventImage(eventImage)}>Set photo</Button>            
        </Footer>
      </IonModal>
    </IonContent>
  )
}

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
`

const Title = styled.h2`
  color: var(--ion-color-primary);
  font-weight: 600;
  margin: 1rem 0 0 0;
`

const Label = styled.label`
  color: var(--ion-color-primary);
`

const Input = styled.input`
  margin: 0.5rem 0;
  width: 100%;
`

const Button = styled.button<ActionButtonProps>`
  background: var(--ion-color-primary);
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 2px;
  font-size: 1rem;
`

const CancelButton = styled.button<ActionButtonProps>`
  color: var(--ion-color-primary);
  background: hsl(225.4,29.1%,90.9%);
  padding: 0.75rem;
  border-radius: 2px;
  font-size: 1rem;
` 

const Description = styled.p`
  color: hsl(203, 13%, 44%);
`

const Image = styled.img<ImageProps>`
  max-width: 100%;
`

const ImagesWrapper = styled.div`
  overflow-y: auto;
`

const ImagesSection = styled.section``

const Footer = styled.footer`
  background: hsl(0,0%,97.6%);
  .modal-cancel {
    background-color: var(--ion-color-primary);
    color: #ffffff;
    padding: 0.5rem 1rem;
  }
`

export default UnsplashModal
