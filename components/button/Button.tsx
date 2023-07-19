import { Pressable, Text } from 'react-native'

interface Props {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  )
}

export default Button
