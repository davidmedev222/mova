import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { MovieListSection, MoviePresentationCard } from '../../components'

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ gap: 20 }}>
      <MoviePresentationCard />
      <MovieListSection title='Top 10 Movies This Week' />
      <MovieListSection title='New Releases' />
      <MovieListSection title='New Series' />
      <MovieListSection title='New Movies' />
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/welcome'>Welcome</Link>
    </ScrollView>
  )
}

export default HomeScreen
