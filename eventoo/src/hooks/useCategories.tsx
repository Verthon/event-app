import { useEffect, useState } from 'react'
import { base } from '../firebase/firebase'

const useFetchCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => { 
    const unsubscribe = base
      .firestore()
      .collection('categories')
      .onSnapshot((snapshot: any) => {
        const data = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setCategories(data)
      })
      return () => unsubscribe()
  }, [])
  return categories
}

export default useFetchCategories
