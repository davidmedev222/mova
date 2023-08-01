import clsx from 'clsx'
import { ReactNode } from 'react'
import { View } from 'react-native'

interface Props {
  position: boolean
  children: ReactNode
}

function AuthWithSocialMedia({ position, children }: Props) {
  const classes = {
    container: clsx('space-y-3', !position && 'flex-row justify-center')
  }

  return (
    <View className={classes.container} style={{ gap: 15 }}>
      {children}
    </View>
  )
}

export default AuthWithSocialMedia
