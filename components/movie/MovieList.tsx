import clsx from 'clsx'
import { View } from 'react-native'
import Movie from './Movie'

const imageSource = require('../../assets/images/avengers.jpg')

function MovieList() {
  const classes = {
    container: clsx('flex-row flex-wrap justify-center')
  }

  return (
    <View className={classes.container} style={{ gap: 8 }}>
      <Movie image={imageSource} rating='9.4' />
      <Movie image={imageSource} rating='9.8' />
      <Movie image={imageSource} rating='9.2' />
      <Movie image={imageSource} rating='9.1' />
      <Movie image={imageSource} rating='9.9' />
      <Movie image={imageSource} rating='9.2' />
      <Movie image={imageSource} rating='9.7' />
      <Movie image={imageSource} rating='9.3' />
      <Movie image={imageSource} rating='9.6' />
      <Movie image={imageSource} rating='9.3' />
      <Movie image={imageSource} rating='9.1' />
      <Movie image={imageSource} rating='9.8' />
      <Movie image={imageSource} rating='9.4' />
      <Movie image={imageSource} rating='9.6' />
      <Movie image={imageSource} rating='9.3' />
      <Movie image={imageSource} rating='9.1' />
      <Movie image={imageSource} rating='9.8' />
    </View>
  )
}

export default MovieList
