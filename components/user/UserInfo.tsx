import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { styled } from 'nativewind'
import { Image, Text, View } from 'react-native'
import { profileDefaultURL } from '../../constants'
import { useAuth } from '../../hooks'

const EditIcon = styled(MaterialIcons)

function UserInfo() {
  const { user } = useAuth()

  const classes = {
    container: clsx('items-center justify-center space-y-0.5'),
    image: clsx('h-32 w-32 self-center rounded-full'),
    editIcon: clsx('p-0.25 absolute bottom-1 right-1 rounded bg-black'),
    username: clsx('text-base font-semibold'),
    email: clsx('text-sm')
  }
  const name = user?.displayName ?? 'John Doe'
  const email = user?.email ?? 'anonymous@gmail.com'

  return (
    <View className={classes.container}>
      <View>
        <Image className={classes.image} source={{ uri: profileDefaultURL }} />
        <EditIcon className={classes.editIcon} name='edit' size={24} color='#ef4444' />
      </View>
      <Text className={classes.username}>{name}</Text>
      <Text className={classes.email}>{email}</Text>
    </View>
  )
}

export default UserInfo
