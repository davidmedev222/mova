import { ScrollView } from 'react-native'
import { MovieList, TagButtonGroup } from '../../../components'

function MyListScreen() {
  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
      <TagButtonGroup row />
      <MovieList />
    </ScrollView>
  )
}

export default MyListScreen
