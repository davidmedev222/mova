import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MovieDetailCard, MovieDetailCredits, MovieDetailInfo, MovieDetailTabs } from '../../../../components'
import { IMovieDetail } from '../../../../models'
import { getMovieDetails } from '../../../../services'

function MovieDetailScreen() {
  const { id } = useLocalSearchParams()
  const [movie, setMovie] = useState<IMovieDetail | null>(null)
  const movieID = id as string
  const imageURL = movie?.backdrop_path ?? movie?.poster_path

  useEffect(() => {
    getMovieDetails(movieID)
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView contentContainerStyle={{ gap: 16 }}>
      {movie !== null && <MovieDetailCard thumbnailURL={`https://image.tmdb.org/t/p/w500/${imageURL as string}`} />}
      {movie !== null && <MovieDetailInfo movie={movie} />}
      {movie !== null && <MovieDetailCredits movieID={movieID} />}
      {movie !== null && (
        <MovieDetailTabs movieID={movieID} thumbnailURL={`https://image.tmdb.org/t/p/w500/${imageURL as string}`} />
      )}
    </ScrollView>
  )
}

export default MovieDetailScreen
