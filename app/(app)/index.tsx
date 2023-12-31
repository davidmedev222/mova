import { Suspense, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MovieListSection, MoviePresentationCard } from '../../components'
import { IMovie, Routes } from '../../models'
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
      <Suspense>
        <MovieListSection
          movies={moviesNowPlaying}
          title='Now Playing'
          href={{ pathname: Routes.category, params: { name: 'Now Playing', id: 'now_playing' } }}
        />
      </Suspense>
      <Suspense>
        <MovieListSection
          movies={moviesTopRated}
          title='Top Rated'
          href={{ pathname: Routes.category, params: { name: 'Top Rated', id: 'top_rated' } }}
        />
      </Suspense>
      <Suspense>
        <MovieListSection
          movies={moviesPopular}
          title='Popular'
          href={{ pathname: Routes.category, params: { name: 'Popular', id: 'popular' } }}
        />
      </Suspense>
      <Suspense>
        <MovieListSection
          movies={moviesUpcoming}
          title='Upcoming'
          href={{ pathname: Routes.category, params: { name: 'Upcoming', id: 'upcoming' } }}
        />
      </Suspense>
    </ScrollView>
  )
}

export default HomeScreen
