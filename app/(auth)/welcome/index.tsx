import { Link } from 'expo-router'
import { Text, View } from 'react-native'

function WelcomeScreen() {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Link href='/login'>Login</Link>
    </View>
  )
}

export default WelcomeScreen
