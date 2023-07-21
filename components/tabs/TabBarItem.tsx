import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Link, usePathname } from 'expo-router'
import { Pressable, Text } from 'react-native'

type IconName = keyof typeof MaterialIcons.glyphMap

interface Props {
  to: string
  icon: IconName
  size: number
  label: string
}

function TabBarItem({ to, icon, size, label }: Props) {
  const pathname = usePathname()
  const isActiveIcon = pathname === to ? '#ef4444' : '#d1d5db'

  const classes = {
    container: clsx('items-center justify-center'),
    label: clsx('text-xs text-gray-300', pathname === to && 'text-red-500')
  }

  return (
    <Link href={to} asChild>
      <Pressable className={classes.container}>
        <MaterialIcons name={icon} size={size} color={isActiveIcon} />
        <Text className={classes.label}>{label}</Text>
      </Pressable>
    </Link>
  )
}

export default TabBarItem
