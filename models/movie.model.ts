export interface IMovieDetail {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IMovieVideo {
  id: string
  iso_3166_1: 'US'
  iso_639_1: 'en'
  key: string
  name: string
  official: boolean
  published_at: Date
  site: 'YouTube'
  size: number
  type: string
}

export interface IMovieCast {
  adult: boolean
  cast_id?: number
  character?: string
  credit_id: string
  department?: Department
  gender: number
  id: number
  job?: string
  known_for_department: Department
  name: string
  order?: number
  original_name: string
  popularity: number
  profile_path: null | string
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Creator = 'Creator',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing'
}

export interface IMovieComments {
  author: string
  author_details: AuthorDetails
  content: string
  created_at: Date
  id: string
  updated_at: Date
  url: string
}

export interface AuthorDetails {
  avatar_path: null | string
  name: string
  rating: number | null
  username: string
}
