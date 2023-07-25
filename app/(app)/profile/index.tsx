import clsx from 'clsx'
import { ScrollView } from 'react-native'
import { OptionLink, PreviewSubscription, UserInfo } from '../../../components'

function ProfileScreen() {
  const classes = {
    container: clsx('flex-1 px-6')
  }

  return (
    <ScrollView className={classes.container} contentContainerStyle={{ gap: 16, paddingVertical: 56 }}>
      <UserInfo />
      <PreviewSubscription />
      <OptionLink icon='account-circle'>Edit Profile</OptionLink>
      <OptionLink icon='notifications'>Notification</OptionLink>
      <OptionLink icon='file-download'>Download</OptionLink>
      <OptionLink icon='security'>Security</OptionLink>
      <OptionLink icon='language'>Language</OptionLink>
      <OptionLink hasSwitch icon='invert-colors'>
        Dark Mode
      </OptionLink>
      <OptionLink icon='info'>Help Center</OptionLink>
      <OptionLink icon='logout'>Log Out</OptionLink>
    </ScrollView>
  )
}

export default ProfileScreen
