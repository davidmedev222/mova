import { Pressable, Text } from 'react-native'

interface Props {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <Pressable className='rounded-full bg-red-500 py-6'>
      <Text className='text-center text-base'>{children}</Text>
    </Pressable>
  )
}

export default Button
