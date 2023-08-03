import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SearchIcon, TabBar } from '../../components'
import { StackRoutes } from '../../models'

function AppLayout() {
  return (
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name={StackRoutes.home} options={{ header: () => null }} />
          <Stack.Screen name={StackRoutes.explore} />
          <Stack.Screen name={StackRoutes.mylist} options={{ title: 'My List', headerRight: () => <SearchIcon /> }} />
          <Stack.Screen
            name={StackRoutes.download}
            options={{ title: 'Download', headerRight: () => <SearchIcon /> }}
          />
          <Stack.Screen name={StackRoutes.profile} options={{ title: 'Profile' }} />
          <Stack.Screen name={StackRoutes.category} options={{ headerRight: () => <SearchIcon /> }} />
        </Stack>
        <TabBar />
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  )
}

export default AppLayout
