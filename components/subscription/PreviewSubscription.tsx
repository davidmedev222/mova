import { FontAwesome5 } from '@expo/vector-icons'
import clsx from 'clsx'
import { Text, View } from 'react-native'

function PreviewSubscription() {
  const classes = {
    container: clsx('flex-row items-center justify-between space-x-4 rounded-3xl border-2 border-red-500 px-4 py-5'),
    info: clsx('grow'),
    title: clsx('text-base font-bold text-red-500'),
    description: clsx('text-xs')
  }

  return (
    <View className={classes.container}>
      <FontAwesome5 name='crown' size={36} color='#ef4444' />
      <View className={classes.info}>
        <Text className={classes.title}>Join Premium!</Text>
        <Text className={classes.description}>Enjoy watching Full-HD movies,</Text>
        <Text className={classes.description}>without restrictions and without ads</Text>
      </View>
      <FontAwesome5 name='angle-right' size={24} color='#ef4444' />
    </View>
  )
}

export default PreviewSubscription
