import { useState } from 'react'
import { View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { ButtonLink, CarouselIndicators, Welcome } from '../../../components'

const primarySource = require('../../../assets/images/welcome_background.webp')
const secondarySource = require('../../../assets/images/welcome_background_3.webp')
const thirdSource = require('../../../assets/images/welcome_background_2.webp')

const pageList = [
  {
    key: 0,
    title: 'Welcome to Mova',
    detail: 'The best movie streaming app of the century to make your days great',
    url: primarySource
  },
  {
    key: 1,
    title: 'The best movies',
    detail: '¡you can watch the best movies when you wish it!',
    url: secondarySource
  },
  {
    key: 2,
    title: 'The best series',
    detail: 'you can watch the best series when you wish it',
    url: thirdSource
  }
]

function WelcomeScreen() {
  const [viewPosition, setViewPosition] = useState(0)

  return (
    <View className='relative flex-1'>
      <PagerView className='flex-1' initialPage={0} onPageSelected={(e) => setViewPosition(e.nativeEvent.position)}>
        {pageList.map((page) => {
          return <Welcome key={page.key} title={page.title} detail={page.detail} imageSource={page.url} />
        })}
      </PagerView>
      <View className='absolute right-44 bottom-20 h-10 flex-row items-end justify-center py-2' style={{ gap: 8 }}>
        {pageList.map((page) => {
          return <CarouselIndicators key={page.key} passKey={page.key} viewPosition={viewPosition} />
        })}
      </View>
      <ButtonLink content='Get started' url='/login' isAbsolute />
    </View>
  )
}

export default WelcomeScreen
