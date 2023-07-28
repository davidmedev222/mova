import { AntDesign } from '@expo/vector-icons'
import clsx from 'clsx'
import { styled } from 'nativewind'
import { Image, ImageSourcePropType, View } from 'react-native'

const PlayIcon = styled(AntDesign)

interface Props {
  thumbnail: ImageSourcePropType
  withIcon?: boolean
}

function Video({ thumbnail, withIcon }: Props) {
  const classes = {
    container: clsx('items-center justify-center'),
    image: clsx('h-24 w-36 rounded-lg'),
    icon: clsx('absolute')
  }

  return (
    <View className={classes.container}>
      <Image source={thumbnail} className={classes.image} />
      {withIcon !== undefined && <PlayIcon className={classes.icon} name='play' size={28} color='#eee' />}
    </View>
  )
}

export default Video
