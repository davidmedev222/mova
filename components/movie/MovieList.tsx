/* eslint-disable @typescript-eslint/naming-convention */
import clsx from 'clsx'
import { View } from 'react-native'
import { movieImageURL } from '../../constants'
import { IMovie } from '../../models'
import Movie from './Movie'

interface Props {
  movies: IMovie[]
}

function MovieList({ movies }: Props) {
  const classes = {
    container: clsx('flex-row flex-wrap justify-center')
  }

  return (
    <View className={classes.container} style={{ gap: 8 }}>
      {movies.map((movie) => {
        const { id, backdrop_path, poster_path, vote_average } = movie
        const imageURL = backdrop_path ?? poster_path
        return <Movie key={id} movieID={id.toString()} imageURL={`${movieImageURL}${imageURL}`} rating={vote_average} />
      })}
    </View>
  )
}

export default MovieList
