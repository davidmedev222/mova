import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { IMovieDetail } from '../../models'
import { getMovieDetails } from '../../services'
import Button from '../button/Button'
import MovieDownloadCard from '../card/MovieDownloadCard'
import DividerWithHeading from '../divider/DividerWithHeading'

interface Props {
  onPressCancel: () => void
  movieID: number
}

function MovieDeleteModal({ onPressCancel, movieID }: Props) {
  const [movie, setMovie] = useState<IMovieDetail | null>(null)

  useEffect(() => {
    getMovieDetails(movieID)
      .then((movie) => setMovie(movie))
      .catch((error) => console.log(error))
  }, [])

  const classes = {
    modal: clsx('items-center justify-center'),
    title: clsx('text-center text-lg font-semibold text-red-500'),
    message: clsx('text-center text-lg font-semibold text-black'),
    buttons: clsx('flex-row')
  }

  return (
    <View className={classes.modal} style={{ gap: 16, padding: 16 }}>
      <Text className={classes.title}>Delete</Text>
      <DividerWithHeading />
      <View className='px-8' style={{ gap: 16 }}>
        <Text className={classes.message}>Are you sure you want to delete this movie download</Text>
        {movie !== null && <MovieDownloadCard movie={movie} />}
      </View>
      <View className={classes.buttons} style={{ gap: 10, paddingTop: 20 }}>
        <Button size='sm' color='gray' onPress={onPressCancel}>
          Cancel
        </Button>
        <Button size='sm'>Yes, Delete</Button>
      </View>
    </View>
  )
}

export default MovieDeleteModal
