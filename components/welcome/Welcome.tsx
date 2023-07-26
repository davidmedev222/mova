import { ImageBackground, ImageSourcePropType, Text } from 'react-native'

interface Props {
  title: string
  detail: string
  url: ImageSourcePropType
}

const Welcome = ({ title, detail, url }: Props) => {
  return (
    <ImageBackground source={url} className='flex-1 items-center justify-end space-y-4 object-cover py-28 px-9'>
      <Text className='text-center text-4xl font-medium text-white'>{title}</Text>
      <Text className='text-1xl text-center text-white'>{detail}</Text>
    </ImageBackground>
  )
}

export default Welcome
