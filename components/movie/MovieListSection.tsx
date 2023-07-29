/* eslint-disable @typescript-eslint/naming-convention */
import clsx from 'clsx'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { movieImageURL } from '../../constants'
import { IMovie } from '../../models'
import Movie from './Movie'

interface Props {
  title: string
  movies: IMovie[]
}

function MovieListSection({ title, movies }: Props) {
  const classes = {
    section: clsx('pl-4'),
    header: clsx('flex-row items-center justify-between pr-4'),
    title: clsx('text-lg font-semibold'),
    link: clsx('font-medium text-red-500')
  }

  return (
    <View className={classes.section} style={{ gap: 12 }}>
      <View className={classes.header}>
        <Text className={classes.title}>{title}</Text>
        <Link href='/' className={classes.link}>
          See all
        </Link>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 8, paddingRight: 16 }}>
        {movies.map((movie) => {
          const { id, vote_average, backdrop_path } = movie
          return <Movie key={id} rating={vote_average} imageURL={`${movieImageURL}${backdrop_path}`} width='md' />
        })}
      </ScrollView>
    </View>
  )
}

export default MovieListSection
