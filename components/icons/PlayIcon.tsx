import { AntDesign } from '@expo/vector-icons'

interface Props {
  size?: number
}

function PlayIcon({ size = 28 }: Props) {
  return <AntDesign name='play' size={size} color='#eee' />
}

export default PlayIcon
