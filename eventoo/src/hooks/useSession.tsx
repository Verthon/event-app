import React, {useContext} from 'react'

const userContext = React.createContext({
  user: null,
})


const useSession = () => {
  const { user } = useContext(userContext)
  return user
}

export default useSession