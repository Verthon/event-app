import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IonModal, IonContent, IonLoading } from '@ionic/react'

import { setUserEventImage } from '../../reducers/events'
import { unsplash } from '../../constants/api'
import { Styled } from './UnsplashModal.styles'

type Url = {
  thumb: string
  small: string
  regular: string
  full: string
  raw: string
}

interface Image {
  id: string
  alt_description: string
  urls: Url
  active: boolean
}

export interface ImageWrapperProps {
  active: boolean
  key: string
  onClick: any
}

export interface ImageProps {
  key: string
  src: string
  alt: string
}

const UnsplashModal = ({ showModal, cancelHandler }: any) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const [query, setQuery] = useState<string>('')
  let [showSpinner, setSpinner] = useState<boolean>(true)
  let [isDataFetched, setDataFetching] = useState<boolean>(true)
  let [eventImage, setEventImage] = useState<string>('')
  let [warning, setWarning] = useState<string>('')

  const setActiveEventImage = (url: string, index: number) => {
    let updatedImages: Array<Image> = images.map(image => ({
      ...image,
      [image.active]: false,
    }))
    setImages(updatedImages)
    updatedImages[index].active = !updatedImages[index].active
    setImages(updatedImages)
    console.log('updatedImages', images)
    setEventImage(url)
  }

  useEffect(() => {}, [images])

  const submitEventImage = (url: string) => {
    dispatch(setUserEventImage(url))
    cancelHandler(false)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  const handleImageSearch = () => {
    setDataFetching(false)
    setSpinner(true)
    unsplash.search
      .photos(query, 1, 10, { orientation: 'landscape' })
      .then(response => response.json())
      .then(data => {
        if (data && data.total > 0) {
          const formattedData = data.results.map((entry: Image) => ({
            id: entry.id,
            alt_description: entry.alt_description,
            urls: entry.urls,
            active: false,
          }))
          setDataFetching(true)
          setSpinner(false)
          setWarning('')
          return setImages(formattedData)
        }
        setDataFetching(true)
        setSpinner(false)
        setWarning(`Sorry. No result found for: ${query}`)
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
        <Styled.Wrapper>
          <Styled.Title>Image selection</Styled.Title>
          <Styled.Description>
            Eventoo is using Unsplash API to provide best quality image
            selection. Please use the input below to search the image for yout
            event using desired category.
          </Styled.Description>
          <Styled.Label>Image category</Styled.Label>
          <Styled.Input
            type="text"
            value={query}
            onChange={e => handleInputChange(e)}
            placeholder="Image category eg. Education"
          />
          <Styled.Button onClick={handleImageSearch}>Get Images</Styled.Button>
          {warning !== '' ? <Styled.InfoMessage>{warning}</Styled.InfoMessage> : null}
          {images.length > 0 ? (
            <Styled.ImagesSection>
              <Styled.Title>Unsplash images</Styled.Title>
              <Styled.Description>
                You can choose only one image, by clicking on image it will be
                added to your event.
              </Styled.Description>
              <Styled.ImagesWrapper>
                {images
                  ? images.map((image: Image, index: number) => (
                      <Styled.ImageWrapper
                        key={image.id}
                        active={image.urls.small === eventImage}
                        onClick={() =>
                          setActiveEventImage(image.urls.small, index)
                        }
                      >
                        <Styled.Image
                          key={image.id}
                          src={image.urls.small}
                          alt={image.alt_description}
                        />
                      </Styled.ImageWrapper>
                    ))
                  : null}
              </Styled.ImagesWrapper>
            </Styled.ImagesSection>
          ) : null}
        </Styled.Wrapper>
        <Styled.Footer>
          <Styled.CancelButton onClick={() => cancelHandler(false)}>
            Cancel
          </Styled.CancelButton>
          <Styled.SubmitButton onClick={() => submitEventImage(eventImage)}>
            Set photo
          </Styled.SubmitButton>
        </Styled.Footer>
      </IonModal>
    </IonContent>
  )
}

export default UnsplashModal
