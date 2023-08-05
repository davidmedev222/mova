import clsx from 'clsx'
import { Text, View } from 'react-native'

interface Props {
  label?: string
}

function DividerWithHeading({ label }: Props) {
  const classes = {
    container: clsx('flex-row items-center justify-center', label !== undefined && 'space-x-4'),
    dividerLeft: clsx('h-[1.25px] grow bg-gray-300'),
    label: clsx('text-base'),
    dividerRight: clsx('h-[1.25px] grow bg-gray-300')
  }

  return (
    <View className={classes.container}>
      <View className={classes.dividerLeft} />
      {label !== undefined && <Text className={classes.label}>{label}</Text>}
      <View className={classes.dividerRight} />
    </View>
  )
}

export default DividerWithHeading
