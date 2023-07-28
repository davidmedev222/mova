import { ScrollView } from 'react-native-gesture-handler'
import { MovieDownloadCard } from '../../../components'

function DownloadScreen() {
  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 12, paddingVertical: 8 }}>
      <MovieDownloadCard />
      <MovieDownloadCard />
      <MovieDownloadCard />
      <MovieDownloadCard />
      <MovieDownloadCard />
      <MovieDownloadCard />
      <MovieDownloadCard />
    </ScrollView>
  )
}

export default DownloadScreen
