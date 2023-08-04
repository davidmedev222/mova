import { IMovieCast, IMovieComments, IMovieDetail, IMovieVideo } from '../../models'

const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGMyZGNlZjdhNTc4ZmI1NmIxMWNiNTM0YTQ4M2YwOSIsInN1YiI6IjY0YzU2MzlkNjNlNmZiMDBhY2RiZTNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLfTjQc0GbDo01E7XEbxslKRv0NrHXtosqmt-alNL9E'
  }
}

async function getMovieDetails(id: string | number): Promise<IMovieDetail> {
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie by ID')
  }

  const movie = await response.json()
  return movie
}

async function getMovieSimilar(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie recommendations')
  }

  const { results } = await response.json()
  return results
}

async function getMovieVideos(id: string): Promise<IMovieVideo[]> {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie videos')
  }

  const { results } = await response.json()
  return results
}

async function getMovieCredits(id: string): Promise<IMovieCast[]> {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie credits')
  }

  const { cast } = await response.json()
  return cast
}

async function getMovieComments(id: string): Promise<IMovieComments[]> {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie comments')
  }

  const { results } = await response.json()
  return results
}

export { getMovieComments, getMovieCredits, getMovieDetails, getMovieSimilar, getMovieVideos }
