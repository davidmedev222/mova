import { Redirect, Stack } from 'expo-router'
import { Text } from 'react-native'
import { useAuth } from '../../hooks'
import { Routes, StackRoutes } from '../../models'

function AuthLayout() {
  const { user } = useAuth()

  if (user !== null) {
    return <Redirect href={Routes.home} />
  }
  if (user === false) {
    return <Text>cargando...</Text>
  }

  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f3f4f6' } }}>
      <Stack.Screen name={StackRoutes.onboarding} options={{ header: () => null }} />
      <Stack.Screen name={StackRoutes.welcome} options={{ header: () => null }} />
      <Stack.Screen name={StackRoutes.login} options={{ title: '' }} />
      <Stack.Screen name={StackRoutes.register} options={{ title: '' }} />
    </Stack>
  )
}

export default AuthLayout
