import { ScrollView } from 'react-native'
import { MovieList } from '../../../components'

function ExploreScreen() {
  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
      <MovieList />
    </ScrollView>
  )
}

export default ExploreScreen
