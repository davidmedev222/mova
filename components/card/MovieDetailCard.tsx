import clsx from 'clsx'
import { ImageBackground } from 'react-native'
import { TMovieImageURL } from '../../models'
import MovieDetailHeader from '../header/MovieDetailHeader'

interface Props {
  thumbnailURL: TMovieImageURL
}

function MovieDetailCard({ thumbnailURL }: Props) {
  const classes = {
    background: clsx('h-80'),
    card: clsx('px-6')
  }

  return (
    <ImageBackground
      className={classes.background}
      source={{ uri: thumbnailURL }}
      imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
    >
      <MovieDetailHeader />
    </ImageBackground>
  )
}

export default MovieDetailCard
