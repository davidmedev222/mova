import { Stack } from 'expo-router'
import { StackRoutes } from '../../models'

function AuthLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f3f4f6' } }}>
      <Stack.Screen name={StackRoutes.welcome} options={{ header: () => null }} />
      <Stack.Screen name={StackRoutes.login} options={{ title: '' }} />
      <Stack.Screen name={StackRoutes.register} options={{ title: '' }} />
    </Stack>
  )
}

export default AuthLayout
