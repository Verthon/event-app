import { useEffect, useState, useRef } from 'react'
import { db } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'

export const useFetchCollection = (
  collectionName: string,
  fetchAll,
  userId = ''
) => {
  const dispatch: AppDispatch = useDispatch()
  const [response, setResponse] = useState({
    data: null,
    isLoading: true,
    error: null
  })
  const hasUnmounted = useRef(false)
  useEffect(() => {
    return () => (hasUnmounted.current = true)
  }, [])
  useEffect(() => {
    const unsubscribe = db.collection(collectionName).onSnapshot(() => {
      return dispatch(fetchAll(userId))
        .then(result => {
          if (!hasUnmounted.current) {
            setResponse({ data: result.payload, isLoading: false, error: null })
          }
        })
        .catch(error => {
          if (!hasUnmounted.current) {
            setResponse({ data: null, isLoading: false, error })
          }
        })
    })
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, dispatch, fetchAll, setResponse])

  return response
}
