/* eslint-disable @typescript-eslint/naming-convention */
import clsx from 'clsx'
import { formatDistanceToNow } from 'date-fns'
import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { avatarDefaultURL, movieImageURL } from '../../constants'
import { IMovieComments } from '../../models'
import { getMovieComments } from '../../services'
import PendingIcon from '../icons/PendingIcon'
import StarIcon from '../icons/StarIcon'

interface Props {
  movieID: string
}

function CommentsScreen({ movieID }: Props) {
  const [comments, setComments] = useState<IMovieComments[]>([])

  const classes = {
    links: clsx('flex-row items-center justify-between'),
    title: clsx('text-lg font-bold'),
    link: clsx('text-xs text-red-500'),
    header: clsx('flex-row items-center justify-between space-x-4'),
    name: clsx('grow text-base font-semibold'),
    comment: clsx('text-sm'),
    footer: clsx('flex-row items-center space-x-1'),
    avatar: clsx('h-12 w-12 rounded-full')
  }

  useEffect(() => {
    getMovieComments(movieID)
      .then((comments) => setComments(comments))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView contentContainerStyle={{ gap: 16 }}>
      <View className={classes.links}>
        <Text className={classes.title}>{comments?.length} Comments</Text>
        {comments.length > 0 && <Text className={classes.link}>See all</Text>}
      </View>
      {comments.map((comment) => {
        const { id, updated_at, author_details, content } = comment
        const imageURL =
          author_details.avatar_path !== null ? `${movieImageURL + author_details.avatar_path}` : avatarDefaultURL
        const date = new Date(updated_at)
        const formattedDate = formatDistanceToNow(date, { addSuffix: true })
        const name = author_details.name !== '' ? author_details.name : 'Guest Account'

        return (
          <View key={id} style={{ gap: 8 }}>
            <View className={classes.header}>
              <Image className={classes.avatar} source={{ uri: imageURL }} />
              <Text className={classes.name}>{name}</Text>
              <PendingIcon color='#000000' size={24} />
            </View>
            <Text numberOfLines={2} className={classes.comment}>
              {content}
            </Text>
            <View className={classes.footer}>
              <StarIcon color='#ef4444' size={20} />
              <Text>{author_details.rating ?? '6'}</Text>
              <Text style={{ paddingLeft: 16 }}>{formattedDate}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default CommentsScreen
