import { MaterialCommunityIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { styled } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import Searcher from '../search/Searcher'

const FilterIcon = styled(MaterialCommunityIcons)

interface Props {
  onPressIcon: () => void
}

function ExploreHeader({ onPressIcon }: Props) {
  const classes = {
    header: clsx('flex-row items-center space-x-4 px-2 py-4'),
    filterIcon: clsx('rounded bg-red-500 p-1.5')
  }

  return (
    <SafeAreaView className={classes.header}>
      <Searcher />
      <FilterIcon onPress={onPressIcon} className={classes.filterIcon} name='sort' size={28} color='#ffffff' />
    </SafeAreaView>
  )
}

export default ExploreHeader
