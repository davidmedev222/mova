import { MaterialIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native'

interface Props {
  color?: `#${string}`
}

function SearchIcon({ color = '#000000' }: Props) {
  return (
    <Pressable>
      <MaterialIcons name='search' size={28} color={color} />
    </Pressable>
  )
}

export default SearchIcon
