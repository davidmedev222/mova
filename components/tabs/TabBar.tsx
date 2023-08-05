import { View } from 'react-native'
import { Routes } from '../../models'
import TabBarItem from './TabBarItem'

function TabBar() {
  return (
    <View className='flex-row justify-between bg-gray-200 py-4 px-8'>
      <TabBarItem to={Routes.home} icon='home' size={34} label='Home' />
      <TabBarItem to={Routes.explore} icon='explore' size={34} label='Explore' />
      <TabBarItem to={Routes.mylist} icon='bookmark' size={34} label='My List' />
      <TabBarItem to={Routes.download} icon='file-download' size={34} label='Download' />
      <TabBarItem to={Routes.profile} icon='account-circle' size={34} label='Profile' />
    </View>
  )
}

export default TabBar
