import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, Text, View } from 'react-native'
import TagButton from '../button/TagButton'
import HomeHeader from '../header/HomeHeader'
import PlayIcon from '../icons/PlayIcon'
import PlusIcon from '../icons/PlusIcon'

const imageSource = require('../../assets/images/avengers.jpg')

function MoviePresentationCard() {
  const classes = {
    background: clsx('h-80'),
    card: clsx('items-start justify-between rounded-b-3xl px-6'),
    title: clsx('text-xl font-bold text-white'),
    gender: clsx('text-sm text-gray-200'),
    buttons: clsx('flex-row')
  }

  return (
    <ImageBackground
      className={classes.background}
      source={imageSource}
      imageStyle={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
    >
      <LinearGradient
        className={classes.card}
        style={{ paddingVertical: 16, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)']}
      >
        <HomeHeader />
        <View style={{ gap: 8 }}>
          <Text className={classes.title}>Dr. Strange 2</Text>
          <Text className={classes.gender}>Action, Superhero, Science Fiction</Text>
          <View className={classes.buttons} style={{ gap: 8 }}>
            <TagButton leftIcon={<PlayIcon size={12} />} color='red'>
              Play
            </TagButton>
            <TagButton leftIcon={<PlusIcon size={12} />} color='white' outline>
              My List
            </TagButton>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default MoviePresentationCard
