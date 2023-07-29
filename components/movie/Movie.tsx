import clsx from 'clsx'
import { Image, Text, View } from 'react-native'
import { TMovieImageURL } from '../../models'

interface Props {
  rating: string | number
  imageURL: TMovieImageURL
  width?: 'md'
}

function Movie({ imageURL, rating, width }: Props) {
  const classes = {
    container: clsx('w-[48.5%]', width === 'md' && 'w-40'),
    image: clsx('h-60 w-full rounded'),
    rating: clsx('absolute top-2.5 left-2.5 rounded bg-red-500 py-1 px-2 text-xs text-white')
  }

  return (
    <View className={classes.container}>
      <Image className={classes.image} source={{ uri: imageURL }} />
      <Text className={classes.rating}>{rating}</Text>
    </View>
  )
}

export default Movie
