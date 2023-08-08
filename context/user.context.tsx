import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { IUserCredential } from '../models'
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

  const signUp = async ({ email, password }: IUserCredential) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = async ({ email, password }: IUserCredential) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    return await signOut(auth)
  }

  const values = { user, signUp, signIn, logOut }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
