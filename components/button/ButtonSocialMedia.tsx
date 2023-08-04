import clsx from 'clsx'
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native'

interface Props {
  image: ImageSourcePropType
  label?: string
}
function ButtonSocialMedia({ image, label }: Props) {
  const classes = {
    button: clsx(
      'flex-row items-center justify-center space-x-4 rounded-2xl border border-gray-300 bg-gray-200 py-6',
      label === undefined && 'px-7 py-4'
    ),
    icon: clsx('h-6 w-6', label === undefined && 'h-10 w-10'),
    label: clsx('text-base')
  }

  return (
    <Pressable className={classes.button}>
      <Image className={classes.icon} source={image} />
      {label !== undefined && <Text className={classes.label}>{label}</Text>}
    </Pressable>
  )
}

export default ButtonSocialMedia
