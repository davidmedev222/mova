/* eslint-disable @typescript-eslint/naming-convention */
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IMovieVideo, TMovieImageURL } from '../../models'
import { getMovieVideos } from '../../services'
import Video from '../video/Video'

interface Props {
  movieID: string
  thumbnailURL: TMovieImageURL
}

function VideosScreen({ movieID, thumbnailURL }: Props) {
  const [movies, setMovies] = useState<IMovieVideo[]>([])

  const classes = {
    card: clsx('flex-row space-x-4'),
    details: clsx('flex-1 justify-center'),
    title: clsx('text-base font-bold'),
    hours: clsx('text-sm text-gray-800'),
    options: clsx('flex-row items-center justify-between'),
    size: clsx('rounded-full bg-red-700 py-0.5 px-2 text-xs text-red-200')
  }

  useEffect(() => {
    getMovieVideos(movieID)
      .then((movies) => setMovies(movies))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView contentContainerStyle={{ gap: 8 }}>
      {movies.map((movie) => {
        const { id, name, published_at, site } = movie
        return (
          <View key={id} className={classes.card}>
            <Video withIcon thumbnailURL={thumbnailURL} />
            <View className={classes.details} style={{ gap: 4 }}>
              <Text numberOfLines={1} className={classes.title}>
                {name}
              </Text>
              <Text className={classes.hours}>{published_at.toLocaleString().slice(0, 10)}</Text>
              <View className={classes.options}>
                <Text className={classes.size}>{site}</Text>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default VideosScreen
