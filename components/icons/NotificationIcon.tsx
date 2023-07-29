import { MaterialIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native'

interface Props {
  color?: `#${string}`
}

function NotificationIcon({ color = '#000000' }: Props) {
  return (
    <Pressable>
      <MaterialIcons name='notifications' size={28} color={color} />
    </Pressable>
  )
}

export default NotificationIcon
