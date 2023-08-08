import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  color: `#${string}`
  size: number
}

function SendIcon({ color, size }: Props) {
  return <MaterialIcons name='send' size={size} color={color} />
}

export default SendIcon
