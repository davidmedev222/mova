import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { MovieList } from '../../../../components'
import { IMovie } from '../../../../models'
import { getMovieList } from '../../../../services'

function CategoryScreen() {
  const { name, id } = useLocalSearchParams()
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    getMovieList(id as string)
      .then((movies) => setMovies(movies))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Stack.Screen options={{ title: name as string }} />
      <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
        <MovieList movies={movies} />
      </ScrollView>
    </>
  )
}

export default CategoryScreen
