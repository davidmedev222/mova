import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import clsx from 'clsx'
import { styled } from 'nativewind'
import { Text, View } from 'react-native'
import Button from '../button/Button'
import TagButtonGroup from '../button/TagButtonGroup'
import DividerWithHeading from '../divider/DividerWithHeading'

const ScrollView = styled(BottomSheetScrollView)

function SortAndFilterModal() {
  const classes = {
    container: clsx('bg-gray-100 px-4'),
    title: clsx('text-center text-lg font-semibold text-red-500'),
    category: clsx('text-base font-semibold'),
    buttons: clsx('flex-row')
  }

  return (
    <ScrollView className={classes.container} contentContainerStyle={{ gap: 16, paddingVertical: 16 }}>
      <Text className={classes.title}>Sort & Filter</Text>
      <DividerWithHeading />
      <View style={{ gap: 12 }}>
        <Text className={classes.category}>Categories</Text>
        <TagButtonGroup row />
      </View>
      <View style={{ gap: 12 }}>
        <Text className={classes.category}>Regions</Text>
        <TagButtonGroup row />
      </View>
      <View style={{ gap: 12 }}>
        <Text className={classes.category}>Gender</Text>
        <TagButtonGroup row />
      </View>
      <View style={{ gap: 12 }}>
        <Text className={classes.category}>Time/Periods</Text>
        <TagButtonGroup row />
      </View>
      <View style={{ gap: 12 }}>
        <Text className={classes.category}>Sort</Text>
        <TagButtonGroup row />
      </View>
      <View className={classes.buttons} style={{ gap: 10, paddingTop: 20 }}>
        <Button size='sm' color='gray'>
          Reset
        </Button>
        <Button size='sm'>Apply</Button>
      </View>
    </ScrollView>
  )
}

export default SortAndFilterModal
