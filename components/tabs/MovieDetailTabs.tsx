import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TMovieImageURL } from '../../models'
import CommentsScreen from './CommentsScreen'
import MoreLikeThisScreen from './MoreLikeThisScreen'
import VideosScreen from './VideosScreen'

const Tab = createMaterialTopTabNavigator()

interface Props {
  movieID: string
  thumbnailURL: TMovieImageURL
}

function Tabs({ movieID, thumbnailURL }: Props) {
  return (
    <Tab.Navigator
      style={{ height: 500 }}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'capitalize', fontSize: 14, fontWeight: '600' },
        tabBarActiveTintColor: '#ef4444',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarIndicatorStyle: { backgroundColor: '#ef4444', height: 3 }
      }}
      sceneContainerStyle={{ padding: 16 }}
    >
      <Tab.Screen name='Videos'>{(props) => <VideosScreen movieID={movieID} thumbnailURL={thumbnailURL} />}</Tab.Screen>
      <Tab.Screen name='More Like this'>{(props) => <MoreLikeThisScreen movieID={movieID} />}</Tab.Screen>
      <Tab.Screen name='Comments'>{(props) => <CommentsScreen movieID={movieID} />}</Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
