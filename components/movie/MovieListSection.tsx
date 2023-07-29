import clsx from 'clsx'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Movie from './Movie'

interface Props {
  title: string
}

function MovieListSection({ title }: Props) {
  const classes = {
    section: clsx('pl-4'),
    header: clsx('flex-row items-center justify-between pr-4'),
    title: clsx('text-lg font-semibold'),
    link: clsx('font-medium text-red-500')
  }

  return (
    <View className={classes.section} style={{ gap: 12 }}>
      <View className={classes.header}>
        <Text className={classes.title}>{title}</Text>
        <Link href='/' className={classes.link}>
          See all
        </Link>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 8, paddingRight: 16 }}>
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
        <Movie width='md' rating='9.7' image={require('../../assets/images/avengers.jpg')} />
      </ScrollView>
    </View>
  )
}

export default MovieListSection
