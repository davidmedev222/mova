import { useState } from 'react'
import { View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { ButtonLink, CarouselIndicators, Welcome } from '../../../components'

const url = '../../../assets/images/'

const imageSource = {
  primarySource: require(`${url}welcome_background.webp`),
  secondarySource: require(`${url}welcome_background_3.webp`),
  thirdSource: require(`${url}welcome_background_2.webp`)
}

const carouselSection = [
  {
    key: 0,
    title: 'Welcome to Mova',
    detail: 'The best movie streaming app of the century to make your days great',
    url: imageSource.primarySource
  },
  {
    key: 1,
    title: 'The best movies',
    detail: '¡you can watch the best movies when you wish it!',
    url: imageSource.secondarySource
  },
  {
    key: 2,
    title: 'The best series',
    detail: 'you can watch the best series when you wish it',
    url: imageSource.thirdSource
  }
]

function WelcomeScreen() {
  const [getDataPager, setGetDataPager] = useState(0)

  return (
    <View className='relative flex-1'>
      <PagerView className='flex-1' initialPage={0} onPageSelected={(e) => setGetDataPager(e.nativeEvent.position)}>
        {carouselSection.map((data) => {
          return <Welcome key={data.key} title={data.title} detail={data.detail} url={data.url} />
        })}
      </PagerView>
      <View className='absolute right-44 bottom-20 h-10 flex-row items-end justify-center py-2' style={{ gap: 8 }}>
        {carouselSection.map((data) => {
          return <CarouselIndicators key={data.key} passKey={data.key} getPager={getDataPager} />
        })}
      </View>
      <ButtonLink content='Get started' url='/login' isAbsolute />
    </View>
  )
}

export default WelcomeScreen
