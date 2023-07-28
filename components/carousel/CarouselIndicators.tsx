import clsx from 'clsx'
import { View } from 'react-native'

interface Props {
  viewPosition: number
  passKey: number
}

function CarouselIndicators({ viewPosition, passKey }: Props) {
  const classes = {
    indicator: clsx('h-2 w-2 rounded-full bg-slate-200', passKey === viewPosition && 'w-8 bg-red-500')
  }
  return <View className={classes.indicator} />
}

export default CarouselIndicators
