import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD2sttv1bz0TIUaj8P_enyjkJvFKhBGj50',
  authDomain: 'mova-ab350.firebaseapp.com',
  projectId: 'mova-ab350',
  storageBucket: 'mova-ab350.appspot.com',
  messagingSenderId: '936547315946',
  appId: '1:936547315946:web:f66984ca3374ff5bc86793'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
