import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Redirect, Stack } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SearchIcon, TabBar } from '../../components'
import { useAuth } from '../../hooks'
import { Routes, StackRoutes } from '../../models'

function AppLayout() {
  const { user } = useAuth()

  if (user === null) {
    return <Redirect href={Routes.onboarding} />
  }
  if (user === false) {
    return <Text>cargando...</Text>
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ contentStyle: { backgroundColor: '#ffffff' } }}>
          <Stack.Screen name={StackRoutes.home} options={{ header: () => null }} />
          <Stack.Screen name={StackRoutes.movie} options={{ header: () => null }} />
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
