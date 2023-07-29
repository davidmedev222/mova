import clsx from 'clsx'
import { Pressable, Text } from 'react-native'

interface Props {
  children: React.ReactNode
  isActive?: boolean
  color?: 'red' | 'white'
  outline?: boolean
  leftIcon?: JSX.Element
}

function TagButton({ children, isActive, color, outline, leftIcon }: Props) {
  const classes = {
    button: clsx(
      'rounded-full border-2 border-red-500 py-1 px-4',
      isActive === true && 'bg-red-500',
      color === 'red' && 'border-transparent bg-red-500',
      color === 'white' && 'bg-white',
      color === 'white' && outline === true && 'border-white bg-transparent',
      leftIcon !== undefined && 'flex-row items-center justify-center'
    ),
    label: clsx(
      'text-xs text-red-500',
      isActive === true && 'text-white',
      color === 'red' && 'text-white',
      color === 'white' && outline === true && 'text-white'
    )
  }

  return (
    <Pressable className={classes.button} style={{ gap: 8 }}>
      {leftIcon !== undefined && leftIcon}
      <Text className={classes.label}>{children}</Text>
    </Pressable>
  )
}

export default TagButton
