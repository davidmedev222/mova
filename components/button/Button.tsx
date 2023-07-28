import clsx from 'clsx'
import { Pressable, Text } from 'react-native'

interface Props {
  children: React.ReactNode
  onPress?: () => void
  size?: 'sm'
  color?: 'gray'
}

function Button({ children, onPress, size, color }: Props) {
  const classes = {
    button: clsx('grow rounded-full bg-red-500 py-6', size === 'sm' && 'py-4', color === 'gray' && 'bg-gray-500'),
    text: clsx('text-center text-base text-white')
  }

  return (
    <Pressable className={classes.button} onPress={onPress}>
      <Text className={classes.text}>{children}</Text>
    </Pressable>
  )
}

export default Button
