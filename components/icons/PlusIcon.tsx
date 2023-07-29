import { AntDesign } from '@expo/vector-icons'

interface Props {
  size?: number
}

function PlusIcon({ size = 28 }: Props) {
  return <AntDesign name='plus' size={size} color='#ffffff' />
}

export default PlusIcon
