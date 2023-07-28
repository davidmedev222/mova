import clsx from 'clsx'
import { Text, View } from 'react-native'
import Button from '../button/Button'
import MovieDownloadCard from '../card/MovieDownloadCard'
import DividerWithHeading from '../divider/DividerWithHeading'

interface Props {
  onPressCancel: () => void
}

function MovieDeleteModal({ onPressCancel }: Props) {
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
        <MovieDownloadCard />
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
