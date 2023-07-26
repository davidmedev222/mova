import clsx from 'clsx'
import { View } from 'react-native'

interface Props {
  getPager: number
  passKey: number
}

const CarouselIndicators = ({ getPager, passKey }: Props) => {
  console.log(passKey)
  const classes = {
    indicator: clsx('h-2 w-2 rounded-full bg-slate-200', passKey === getPager && 'w-8 bg-red-500')
  }
  return <View className={classes.indicator} />
}

export default CarouselIndicators
