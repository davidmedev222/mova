import clsx from 'clsx'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

interface Props {
  rating: string
  image: ImageSourcePropType
}

function Movie({ image, rating }: Props) {
  const classes = {
    container: clsx('w-[48.5%]'),
    image: clsx('h-60 w-full rounded'),
    rating: clsx('absolute top-2.5 left-2.5 rounded bg-red-500 py-1 px-2 text-xs text-white')
  }

  return (
    <View className={classes.container}>
      <Image className={classes.image} source={image} />
      <Text className={classes.rating}>{rating}</Text>
    </View>
  )
}

export default Movie
