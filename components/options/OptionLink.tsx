import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Text, View } from 'react-native'

type IconName = keyof typeof MaterialIcons.glyphMap

interface Props {
  children: React.ReactNode
  icon: IconName
}

function OptionLink({ children, icon }: Props) {
  const classes = {
    option: clsx('flex-row items-center justify-between space-x-4'),
    label: clsx('grow text-base font-medium')
  }

  return (
    <View className={classes.option}>
      <MaterialIcons name={icon} size={28} color='#000000' />
      <Text className={classes.label}>{children}</Text>
    </View>
  )
}

export default OptionLink
