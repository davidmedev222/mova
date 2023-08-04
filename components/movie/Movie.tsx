import clsx from 'clsx'
import { Link } from 'expo-router'
import { ImageBackground, Text, View } from 'react-native'
import { Routes, TMovieImageURL } from '../../models'

interface Props {
  rating: string | number
  imageURL: TMovieImageURL
  width?: 'md'
  movieID: string
}

function Movie({ imageURL, rating, width, movieID }: Props) {
  const classes = {
    container: clsx('w-[48.5%]', width === 'md' && 'w-40'),
    image: clsx('h-60 w-full rounded'),
    rating: clsx('absolute top-2.5 left-2.5 rounded bg-red-500 py-1 px-2 text-xs text-white')
  }

  return (
    <View className={classes.container}>
      <ImageBackground source={{ uri: imageURL }}>
        <Link href={{ pathname: Routes.movie, params: { id: movieID } }} className={classes.image} />
      </ImageBackground>
      <Text className={classes.rating}>{rating.toString().slice(0, 3)}</Text>
    </View>
  )
}

export default Movie
