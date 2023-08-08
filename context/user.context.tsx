import { User, onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../services'

export const UserContext = createContext({})

interface Props {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null | false>(false)

  useEffect(() => {
    const onSusbcribeUser = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        console.log('existe')
        setUser(user)
      } else {
        console.log('no existe')
        setUser(null)
      }

      return () => onSusbcribeUser()
    })
  }, [])

  const values = { user }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
