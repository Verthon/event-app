import { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'

export const useFetchCollection = (collectionName: string, fetchAll) => {
  const dispatch: AppDispatch = useDispatch()
  const [response, setResponse] = useState({
    data: null,
    isLoading: true,
    error: null
  })
  useEffect(() => {
    db.collection(collectionName).onSnapshot(() => {
      dispatch(fetchAll())
        .then((result) => {
          setResponse({ data: result.payload, isLoading: false, error: null })
        })
        .catch(error => {
          setResponse({ data: null, isLoading: false, error })
        })
    })
  }, [collectionName, dispatch, fetchAll, setResponse])

  return response
}

