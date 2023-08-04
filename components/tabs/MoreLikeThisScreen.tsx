import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { IMovie } from '../../models'
import { getMovieSimilar } from '../../services'
import MovieList from '../movie/MovieList'

interface Props {
  movieID: string
}

function MoreLikeThisScreen({ movieID }: Props) {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    getMovieSimilar(movieID)
      .then((movies) => setMovies(movies))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView contentContainerStyle={{ gap: 16 }}>
      <MovieList movies={movies} />
    </ScrollView>
  )
}

export default MoreLikeThisScreen
