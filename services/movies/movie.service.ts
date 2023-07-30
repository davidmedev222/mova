import { IMovieDetail } from '../../models'

const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGMyZGNlZjdhNTc4ZmI1NmIxMWNiNTM0YTQ4M2YwOSIsInN1YiI6IjY0YzU2MzlkNjNlNmZiMDBhY2RiZTNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLfTjQc0GbDo01E7XEbxslKRv0NrHXtosqmt-alNL9E'
  }
}

async function getMovieDetails(id: number): Promise<IMovieDetail> {
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Error trying to get the movie by ID')
  }

  const movie = await response.json()
  return movie
}

export { getMovieDetails }
