import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MovieListSection, MoviePresentationCard } from '../../components'
import { IMovie } from '../../models'
import { getMovieListNowPlaying, getMovieListPopular, getMovieListTopRated, getMovieListUpcoming } from '../../services'

function HomeScreen() {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<IMovie[]>([])
  const [moviesTopRated, setMoviesTopRated] = useState<IMovie[]>([])
  const [moviesPopular, setMoviesPopular] = useState<IMovie[]>([])
  const [moviesUpcoming, setMoviesUpcoming] = useState<IMovie[]>([])

  useEffect(() => {
    const fetchMovieLists = async () => {
      try {
        const [nowPlaying, topRated, popular, upcoming] = await Promise.all([
          getMovieListNowPlaying(),
          getMovieListTopRated(),
          getMovieListPopular(),
          getMovieListUpcoming()
        ])

        setMoviesNowPlaying(nowPlaying)
        setMoviesTopRated(topRated)
        setMoviesPopular(popular)
        setMoviesUpcoming(upcoming)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchMovieLists()
  }, [])

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }}>
      <MoviePresentationCard />
      {moviesNowPlaying.length > 0 && <MovieListSection movies={moviesNowPlaying} title='Now Playing' />}
      {moviesTopRated.length > 0 && <MovieListSection movies={moviesTopRated} title='Top Rated' />}
      {moviesPopular.length > 0 && <MovieListSection movies={moviesPopular} title='Popular' />}
      {moviesUpcoming.length > 0 && <MovieListSection movies={moviesUpcoming} title='Upcoming' />}
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/welcome'>Welcome</Link>
    </ScrollView>
  )
}

export default HomeScreen
