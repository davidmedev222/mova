import clsx from 'clsx'
import { Text, View } from 'react-native'
import { IMovieDetail } from '../../models'
import TagButton from '../button/TagButton'
import BookmarkIcon from '../icons/BookmarkIcon'
import DownloadIcon from '../icons/DowndloadIcon'
import PlayIcon from '../icons/PlayIcon'
import SendIcon from '../icons/SendIcon'
import StarIcon from '../icons/StarIcon'

interface Props {
  movie: IMovieDetail
}

function MovieDetailInfo({ movie }: Props) {
  const classes = {
    header: clsx('flex-row flex-wrap items-center justify-between'),
    title: clsx('text-xl font-bold'),
    footer: clsx('flex-row space-x-4'),
    buttons: clsx('flex-row'),
    text: clsx('text-sm')
  }

  return (
    <View style={{ gap: 8, paddingHorizontal: 16 }}>
      <View className={classes.header}>
        <Text className={classes.title}>{movie.original_title}</Text>
        <View className='flex-row' style={{ gap: 10 }}>
          <BookmarkIcon size={20} color='#000000' />
          <SendIcon size={20} color='#000000' />
        </View>
      </View>
      <View className='flex-row flex-wrap items-center' style={{ gap: 8 }}>
        <StarIcon size={20} color='#ef4444' />
        <Text className='text-red-500'>{movie.vote_average.toString().slice(0, 3)}</Text>
        <View className='flex-row' style={{ gap: 8 }}>
          {movie.status !== '' && <TagButton outline>{movie.status}</TagButton>}
          {movie.tagline !== '' && <TagButton outline>{movie.tagline}</TagButton>}
        </View>
      </View>
      <View className={classes.buttons} style={{ gap: 8 }}>
        <TagButton full size='lg' leftIcon={<PlayIcon size={16} />} color='red'>
          Play
        </TagButton>
        <TagButton full size='lg' leftIcon={<DownloadIcon size={16} color='#ffffff' />} color='red'>
          Download
        </TagButton>
      </View>
      <Text className={classes.text} numberOfLines={1}>
        Genre:{' '}
        {movie.genres.map((genre, index) => {
          const lastGenre = movie.genres.length - 1
          if (index === lastGenre) {
            return `${genre.name}`
          }
          return `${genre.name}, `
        })}
      </Text>
      <Text className={classes.text} numberOfLines={3}>
        {movie.overview}
      </Text>
    </View>
  )
}

export default MovieDetailInfo
