import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { MovieList, TagButtonGroup } from '../../../components'
import { IMovie } from '../../../models'
import { getMovieListNowPlaying } from '../../../services'

function MyListScreen() {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<IMovie[]>([])

  useEffect(() => {
    getMovieListNowPlaying()
      .then((movie) => setMoviesNowPlaying(movie))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
      <TagButtonGroup row />
      <MovieList movies={moviesNowPlaying} />
    </ScrollView>
  )
}

export default MyListScreen
