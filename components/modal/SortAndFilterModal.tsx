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
    section: clsx('space-y-3'),
    category: clsx('text-base font-semibold'),
    buttons: clsx('flex-row')
  }

  return (
    <ScrollView className={classes.container} contentContainerStyle={{ gap: 16, paddingVertical: 16 }}>
      <Text className={classes.title}>Sort & Filter</Text>
      <DividerWithHeading />
      <View className={classes.section}>
        <Text className={classes.category}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagButtonGroup row />
        </ScrollView>
      </View>
      <View className={classes.section}>
        <Text className={classes.category}>Regions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagButtonGroup row />
        </ScrollView>
      </View>
      <View className={classes.section}>
        <Text className={classes.category}>Gender</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagButtonGroup row />
        </ScrollView>
      </View>
      <View className={classes.section}>
        <Text className={classes.category}>Time/Periods</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagButtonGroup row />
        </ScrollView>
      </View>
      <View className={classes.section}>
        <Text className={classes.category}>Sort</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagButtonGroup row />
        </ScrollView>
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
