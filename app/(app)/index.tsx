import { Link } from 'expo-router'
import { Text, View } from 'react-native'

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/welcome'>Welcome</Link>
    </View>
  )
}

export default HomeScreen
