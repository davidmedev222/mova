import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import {
  AuthActionMessage,
  AuthWithSocialMedia,
  Button,
  ButtonSocialMedia,
  EmailIcon,
  EyesIcon,
  Input,
  LockIcon
} from '../../../components'
import { useAuth } from '../../../hooks'
import { Routes } from '../../../models'

const imageGoogleIcon = require('../../../assets/images/google.png')
const imageGithubIcon = require('../../../assets/images/github.png')
const imageTwitterIcon = require('../../../assets/images/twitter.png')

function LoginScreen() {
  const { signIn } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleOnChangeText = (name: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSignIn = async () => {
    try {
      await signIn(form)
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
  }

  return (
    <View className=' py-5 px-5' style={{ gap: 30 }}>
      <Image source={require('../../../assets/mova.png')} className='h-24 w-24 self-center' />
      <View className='items-center self-center' style={{ gap: 20 }}>
        <Text className='text-center text-3xl font-semibold'>Login to Your Account</Text>
        <Input
          onChangeText={(value) => handleOnChangeText('email', value)}
          value={form.email}
          placeholder='johndoe@gmail.com'
          leftIcon={<EmailIcon />}
        />
        <Input
          onChangeText={(value) => handleOnChangeText('password', value)}
          value={form.password}
          placeholder='johndoe222'
          leftIcon={<LockIcon />}
          rightIcon={<EyesIcon />}
        />
      </View>
      <View className='flex-row items-center self-center' style={{ gap: 10 }}>
        <Checkbox className='h-6 w-6 border-spacing-1 rounded-md border-2 border-red-500' />
        <Text>Remember me</Text>
      </View>
      <Button onPress={handleSignIn}>Sign in</Button>
      <Text className='text-center text-xs text-red-500'>Forgot the password?</Text>
      <AuthWithSocialMedia position='row'>
        <ButtonSocialMedia image={imageGoogleIcon} />
        <ButtonSocialMedia image={imageGithubIcon} />
        <ButtonSocialMedia image={imageTwitterIcon} />
      </AuthWithSocialMedia>
      <AuthActionMessage message='Already have an account?' to='Sign up' href={Routes.register} />
    </View>
  )
}

export default LoginScreen
