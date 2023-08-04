import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  color: `#${string}`
  size: number
}

function DownloadIcon({ color, size }: Props) {
  return <MaterialIcons name='file-download' size={size} color={color} />
}

export default DownloadIcon
