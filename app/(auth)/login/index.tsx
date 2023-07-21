import clsx from 'clsx'
import { Image, ScrollView, Text } from 'react-native'
import { AuthActionMessage, AuthWithSocialMedia, Button, DividerWithHeading } from '../../../components'
import { Routes } from '../../../models'

const imageSource = require('../../../assets/images/login-image.png')

function LoginScreen() {
  const classes = {
    container: clsx('flex-1 px-6'),
    image: clsx('h-80 w-full'),
    title: clsx('text-center text-5xl font-semibold')
  }

  return (
    <ScrollView className={classes.container} contentContainerStyle={{ paddingVertical: 56, gap: 28 }}>
      <Image source={imageSource} className={classes.image} />
      <Text className={classes.title}>Let's you in</Text>
      <AuthWithSocialMedia />
      <DividerWithHeading label='or' />
      <Button>Sign in with password</Button>
      <AuthActionMessage message="Don't have an account?" to='Sign up' href={Routes.register} />
    </ScrollView>
  )
}

export default LoginScreen
