import { Link } from 'expo-router'
import { Text, View } from 'react-native'

interface Props {
  message: string
  to: string
  href: string
}

function AuthActionMessage({ message, to, href }: Props) {
  return (
    <View className='flex-row items-center justify-center space-x-2'>
      <Text className='text-sm'>{message}</Text>
      <Link className='text-sm text-red-500' href={href}>
        {to}
      </Link>
    </View>
  )
}

export default AuthActionMessage
