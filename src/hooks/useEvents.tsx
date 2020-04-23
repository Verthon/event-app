import { useEffect, useState } from 'react'

export const fetchAllEvents = async () => {
  // base
  // .firestore()
  //     .collection('events')
  //     .onSnapshot((snapshot: any) => {
  //       const data = snapshot.docs.map((doc: any) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }))
  //       return data
  //     })
}

const useFetchEvents = async () => {
  const [events, setEvents] = useState([])
  // useEffect(() => { 
  //   const unsubscribe = base
  //     .firestore()
  //     .collection('events')
  //     .onSnapshot((snapshot: any) => {
  //       const data = snapshot.docs.map((doc: any) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }))
  //       setEvents(data)
  //     })
  //     return () => unsubscribe()
  // }, [])
  // return events
}

export default useFetchEvents