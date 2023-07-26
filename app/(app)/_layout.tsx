import { Stack } from 'expo-router'
import { Searcheable, TabBar } from '../../components'
import { StackRoutes } from '../../models'

function AppLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name={StackRoutes.home} options={{ title: '' }} />
        <Stack.Screen name={StackRoutes.explore} options={{ title: '' }} />
        <Stack.Screen name={StackRoutes.mylist} options={{ title: 'My List', headerRight: () => <Searcheable /> }} />
        <Stack.Screen name={StackRoutes.download} options={{ title: 'Download' }} />
        <Stack.Screen name={StackRoutes.profile} options={{ title: 'Profile' }} />
      </Stack>
      <TabBar />
    </>
  )
}

export default AppLayout
