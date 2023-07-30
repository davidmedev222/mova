import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Text, View } from 'react-native'
import { movieImageURL } from '../../constants'
import { IMovie, IMovieDetail } from '../../models'
import Video from '../video/Video'

interface Props {
  onPressDelete?: (id: number) => void
  hasDeleteIcon?: boolean
  movie: IMovie | IMovieDetail
}

function MovieDownloadCard({ onPressDelete, hasDeleteIcon, movie }: Props) {
  const classes = {
    card: clsx('flex-row'),
    details: clsx('grow justify-center'),
    title: clsx('text-base font-bold'),
    hours: clsx('text-sm text-gray-800'),
    options: clsx('flex-row items-center justify-between'),
    size: clsx('rounded-full bg-red-700 py-0.5 px-2 text-xs text-red-200')
  }

  const movieSize = movie.vote_average.toString().slice(0, 3)

  return (
    <View className={classes.card} style={{ gap: 16 }}>
      <Video withIcon thumbnailURL={`${movieImageURL}${movie.backdrop_path}`} />
      <View className={classes.details} style={{ gap: 4 }}>
        <Text ellipsizeMode='tail' numberOfLines={1} className={classes.title}>
          {movie.title.slice(0, 20)}
          {movie.title.length > 20 && '...'}
        </Text>
        <Text className={classes.hours}>{movie.release_date.toLocaleString()}</Text>
        <View className={classes.options}>
          <Text className={classes.size}>{movieSize} GB</Text>
          {hasDeleteIcon !== undefined && (
            <MaterialIcons onPress={() => onPressDelete?.(movie.id)} name='delete-outline' size={24} color='#ef4444' />
          )}
        </View>
      </View>
    </View>
  )
}

export default MovieDownloadCard
