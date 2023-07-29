import { IMovie } from '../../models'

const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGMyZGNlZjdhNTc4ZmI1NmIxMWNiNTM0YTQ4M2YwOSIsInN1YiI6IjY0YzU2MzlkNjNlNmZiMDBhY2RiZTNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLfTjQc0GbDo01E7XEbxslKRv0NrHXtosqmt-alNL9E'
  }
}

async function getMovieListPopular(): Promise<IMovie[]> {
  const url = 'https://api.themoviedb.org/3/movie/popular'
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movies popular')
  }

  const { results } = await response.json()
  return results
}

async function getMovieListNowPlaying(): Promise<IMovie[]> {
  const url = 'https://api.themoviedb.org/3/movie/now_playing'
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movies now playing')
  }

  const { results } = await response.json()
  return results
}

async function getMovieListTopRated(): Promise<IMovie[]> {
  const url = 'https://api.themoviedb.org/3/movie/top_rated'
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movies top rated')
  }

  const { results } = await response.json()
  return results
}

async function getMovieListUpcoming(): Promise<IMovie[]> {
  const url = 'https://api.themoviedb.org/3/movie/upcoming'
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movies upcoming')
  }

  const { results } = await response.json()
  return results
}

export { getMovieListNowPlaying, getMovieListPopular, getMovieListTopRated, getMovieListUpcoming }
