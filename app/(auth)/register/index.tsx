import Checkbox from 'expo-checkbox'
import { Image, Text, View } from 'react-native'
import {
  AuthActionMessage,
  AuthWithSocialMedia,
  Button,
  ButtonSocialMedia,
  DividerWithHeading,
  EmailIcon,
  EyesIcon,
  Input,
  LockIcon
} from '../../../components'
import { Routes } from '../../../models'

const imageGoogleIcon = require('../../../assets/images/google.png')
const imageGithubIcon = require('../../../assets/images/github.png')
const imageTwitterIcon = require('../../../assets/images/twitter.png')

function RegisterScreen() {
  return (
    <View className=' py-5 px-5' style={{ gap: 30 }}>
      <Image source={require('../../../assets/mova.png')} className='h-24 w-24 self-center' />
      <View className='items-center self-center' style={{ gap: 20 }}>
        <Text className='text-center text-3xl font-semibold'>Create Your Account</Text>
        <Input value='' placeholder='johndoe@gmail.com' leftIcon={<EmailIcon />} />
        <Input value='' placeholder='johndoe222' leftIcon={<LockIcon />} rightIcon={<EyesIcon />} />
      </View>
      <View className='flex-row items-center self-center' style={{ gap: 10 }}>
        <Checkbox className='h-6 w-6 border-spacing-1 rounded-md border-2 border-red-500' />
        <Text>Remember me</Text>
      </View>
      <Button>Sign Up</Button>
      <DividerWithHeading label='or continue with' />
      <AuthWithSocialMedia position='row'>
        <ButtonSocialMedia image={imageGoogleIcon} />
        <ButtonSocialMedia image={imageGithubIcon} />
        <ButtonSocialMedia image={imageTwitterIcon} />
      </AuthWithSocialMedia>
      <AuthActionMessage message='Already have an account?' to='Sign in' href={Routes.login} />
    </View>
  )
}

export default RegisterScreen
