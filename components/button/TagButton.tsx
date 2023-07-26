import clsx from 'clsx'
import { Pressable, Text } from 'react-native'

interface Props {
  children: React.ReactNode
  isActive: boolean
}

function TagButton({ children, isActive }: Props) {
  const classes = {
    button: clsx('rounded-full border-2 border-red-500 py-1 px-4', isActive && 'bg-red-500'),
    label: clsx('text-xs text-red-500', isActive && 'text-white')
  }

  return (
    <Pressable className={classes.button}>
      <Text className={classes.label}>{children}</Text>
    </Pressable>
  )
}

export default TagButton
