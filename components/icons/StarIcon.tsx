import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  color: `#${string}`
  size: number
}

function StarIcon({ color, size }: Props) {
  return <MaterialIcons name='star' size={size} color={color} />
}

export default StarIcon
