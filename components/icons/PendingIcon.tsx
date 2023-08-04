import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  color: `#${string}`
  size: number
}

function PendingIcon({ color, size }: Props) {
  return <MaterialIcons name='pending' size={size} color={color} />
}

export default PendingIcon
