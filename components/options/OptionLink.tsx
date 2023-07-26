import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Switch, Text, View } from 'react-native'
import { useSwitch } from '../../hooks'

type IconName = keyof typeof MaterialIcons.glyphMap

interface Props {
  children: React.ReactNode
  icon: IconName
  hasSwitch?: boolean
}

function OptionLink({ children, icon, hasSwitch }: Props) {
  const [enableSwitch, toggleSwitch] = useSwitch(false)

  const classes = {
    option: clsx('flex-row items-center justify-between space-x-4'),
    label: clsx('grow text-base font-medium')
  }

  return (
    <View className={classes.option}>
      <MaterialIcons name={icon} size={28} color='#000000' />
      <Text className={classes.label}>{children}</Text>
      {hasSwitch === undefined && <FontAwesome5 name='angle-right' size={24} color='#000000' />}
      {hasSwitch !== undefined && (
        <Switch
          trackColor={{ false: '#cbd5e1', true: '#ef4444' }}
          thumbColor={enableSwitch ? '#000000' : '#000000'}
          onChange={toggleSwitch}
          value={enableSwitch}
        />
      )}
    </View>
  )
}

export default OptionLink
