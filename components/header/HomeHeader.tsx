import clsx from 'clsx'
import Constants from 'expo-constants'
import { View } from 'react-native'
import MovaIcon from '../icons/MovaIcon'
import NotificationIcon from '../icons/NotificationIcon'
import SearchIcon from '../search/SearchIcon'

function HomeHeader() {
  const classes = {
    header: clsx('w-full flex-row justify-between')
  }

  return (
    <View className={classes.header} style={{ paddingTop: Constants.statusBarHeight + 16 }}>
      <MovaIcon />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <SearchIcon color='#ffffff' />
        <NotificationIcon color='#ffffff' />
      </View>
    </View>
  )
}

export default HomeHeader
