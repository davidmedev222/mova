import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  color: `#${string}`
  size: number
}

function BookmarkIcon({ color, size }: Props) {
  return <MaterialIcons name='bookmark' size={size} color={color} />
}

export default BookmarkIcon
