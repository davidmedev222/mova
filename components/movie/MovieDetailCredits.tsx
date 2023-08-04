/* eslint-disable @typescript-eslint/naming-convention */
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { avatarDefaultURL, movieImageURL } from '../../constants'
import { IMovieCast } from '../../models'
import { getMovieCredits } from '../../services'

interface Props {
  movieID: string
}

function MovieCredits({ movieID }: Props) {
  const [movieCredits, setMovieCredits] = useState<IMovieCast[]>([])

  const classes = {
    credits: clsx('flex-row items-center space-x-2'),
    avatar: clsx('h-12 w-12 rounded-full'),
    name: clsx('text-sm font-medium text-black'),
    job: clsx('text-xs text-gray-700')
  }

  useEffect(() => {
    getMovieCredits(movieID)
      .then((movie) => setMovieCredits(movie))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView horizontal contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}>
      {movieCredits.map((credit) => {
        const { id, name, known_for_department, profile_path } = credit
        const imageURL = profile_path !== null ? `${movieImageURL + profile_path}` : avatarDefaultURL

        return (
          <View key={id} className={classes.credits}>
            <Image className={classes.avatar} source={{ uri: imageURL }} />
            <View>
              <Text className={classes.name}>{name}</Text>
              <Text className={classes.job}>{known_for_department}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default MovieCredits
