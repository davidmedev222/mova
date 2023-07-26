import { MaterialIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native'

function SearchIcon() {
  return (
    <Pressable>
      <MaterialIcons name='search' size={28} color='#000000' />
    </Pressable>
  )
}

export default SearchIcon
