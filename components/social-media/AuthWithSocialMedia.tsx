import clsx from 'clsx'
import { View } from 'react-native'

interface Props {
  position: 'row' | 'column'
  children: React.ReactNode
}

function AuthWithSocialMedia({ position, children }: Props) {
  const classes = {
    container: clsx('space-y-3', position === 'row' && 'flex-row justify-center')
  }

  return (
    <View className={classes.container} style={{ gap: 15 }}>
      {children}
    </View>
  )
}

export default AuthWithSocialMedia
