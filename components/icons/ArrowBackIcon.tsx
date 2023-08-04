import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  onPress: () => void
}

function ArrowBackIcon({ onPress }: Props) {
  return <MaterialIcons onPress={onPress} name='arrow-back' size={28} color='#ffffff' />
}

export default ArrowBackIcon
