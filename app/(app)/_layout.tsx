import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ExploreHeader, SearchIcon, TabBar } from '../../components'
import { StackRoutes } from '../../models'

function AppLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name={StackRoutes.home} options={{ title: 'Inicio' }} />
        <Stack.Screen name={StackRoutes.explore} options={{ header: () => <ExploreHeader /> }} />
        <Stack.Screen name={StackRoutes.mylist} options={{ title: 'My List', headerRight: () => <SearchIcon /> }} />
        <Stack.Screen name={StackRoutes.download} options={{ title: 'Download' }} />
        <Stack.Screen name={StackRoutes.profile} options={{ title: 'Profile' }} />
      </Stack>
      <TabBar />
    </SafeAreaProvider>
  )
}

export default AppLayout
