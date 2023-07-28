import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Text, View } from 'react-native'
import Video from '../video/Video'

const thumbnail = require('../../assets/images/avengers.jpg')

function MovieDownloadCard() {
  const classes = {
    card: clsx('flex-row'),
    details: clsx('grow justify-center'),
    title: clsx('text-base font-bold'),
    hours: clsx('text-sm text-gray-800'),
    options: clsx('flex-row items-center justify-between'),
    size: clsx('rounded-full bg-red-700 py-0.5 px-2 text-xs text-red-200')
  }

  return (
    <View className={classes.card} style={{ gap: 16 }}>
      <Video withIcon thumbnail={thumbnail} />
      <View className={classes.details} style={{ gap: 4 }}>
        <Text ellipsizeMode='tail' numberOfLines={1} className={classes.title}>
          Avengers: Infinity Wars
        </Text>
        <Text className={classes.hours}>1h 42m 33s</Text>
        <View className={classes.options}>
          <Text className={classes.size}>1.4 GB</Text>
          <MaterialIcons name='delete-outline' size={24} color='#ef4444' />
        </View>
      </View>
    </View>
  )
}

export default MovieDownloadCard
