import clsx from 'clsx'
import { Image, Pressable, Text, View } from 'react-native'

const imageGoogleIcon = require('../../assets/images/google.png')
const imageGithubIcon = require('../../assets/images/github.png')
const imageTwitterIcon = require('../../assets/images/twitter.png')

function AuthWithSocialMedia() {
  const classes = {
    container: clsx('space-y-3'),
    button: clsx('flex-row items-center justify-center space-x-4 rounded-2xl border border-gray-300 bg-gray-200 py-6'),
    icon: clsx('h-6 w-6'),
    label: clsx('text-base')
  }

  return (
    <View className={classes.container}>
      <Pressable className={classes.button}>
        <Image className={classes.icon} source={imageGoogleIcon} />
        <Text className={classes.label}>Continue with Google</Text>
      </Pressable>
      <Pressable className={classes.button}>
        <Image className={classes.icon} source={imageGithubIcon} />
        <Text className={classes.label}>Continue with Github</Text>
      </Pressable>
      <Pressable className={classes.button}>
        <Image className={classes.icon} source={imageTwitterIcon} />
        <Text className={classes.label}>Continue with Twitter</Text>
      </Pressable>
    </View>
  )
}

export default AuthWithSocialMedia
