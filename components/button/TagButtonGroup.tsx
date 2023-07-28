import { ScrollView } from 'react-native-gesture-handler'
import TagButton from './TagButton'

interface Props {
  row?: boolean
}

function TagButtonGroup({ row }: Props) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={row} contentContainerStyle={{ gap: 8 }}>
      <TagButton isActive={false}>All Categories</TagButton>
      <TagButton isActive>Movies</TagButton>
      <TagButton isActive>TV Series</TagButton>
      <TagButton isActive={false}>Action</TagButton>
      <TagButton isActive={false}>Drama</TagButton>
      <TagButton isActive={false}>Terror</TagButton>
    </ScrollView>
  )
}

export default TagButtonGroup
