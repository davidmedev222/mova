import clsx from 'clsx'
import { TextInput, View } from 'react-native'
import SearchIcon from '../search/SearchIcon'

function Searcher() {
  const classes = {
    sercheable: clsx('flex-1 flex-row items-center space-x-2 rounded-xl bg-gray-200 px-4 py-2'),
    text: clsx('grow')
  }

  return (
    <View className={classes.sercheable}>
      <SearchIcon />
      <TextInput className={classes.text} placeholder='Search' />
    </View>
  )
}

export default Searcher
