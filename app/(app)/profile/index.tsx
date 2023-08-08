import clsx from 'clsx'
import { ScrollView } from 'react-native'
import { OptionLink, PreviewSubscription, UserInfo } from '../../../components'
import { useAuth } from '../../../hooks'

function ProfileScreen() {
  const { logOut } = useAuth()

  const classes = {
    container: clsx('flex-1 px-6')
  }

  return (
    <ScrollView className={classes.container} contentContainerStyle={{ gap: 20, paddingVertical: 56 }}>
      <UserInfo />
      <PreviewSubscription />
      <OptionLink icon='account-circle'>Edit Profile</OptionLink>
      <OptionLink icon='notifications'>Notification</OptionLink>
      <OptionLink icon='file-download'>Download</OptionLink>
      <OptionLink icon='security'>Security</OptionLink>
      <OptionLink icon='language'>Language</OptionLink>
      <OptionLink icon='info'>Help Center</OptionLink>
      <OptionLink onPress={logOut} icon='logout'>
        Log Out
      </OptionLink>
    </ScrollView>
  )
}

export default ProfileScreen
