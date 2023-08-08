import clsx from 'clsx'
import Constants from 'expo-constants'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import ArrowBackIcon from '../icons/ArrowBackIcon'
import CastIcon from '../icons/CastIcon'

function MovieDetailHeader() {
  const { back } = useRouter()
  const classes = {
    header: clsx('w-full flex-row justify-between px-6')
  }

  return (
    <View className={classes.header} style={{ paddingTop: Constants.statusBarHeight + 16 }}>
      <ArrowBackIcon onPress={() => back()} />
      <CastIcon />
    </View>
  )
}

export default MovieDetailHeader
