import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { forwardRef, useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

type BottomSheetModalRef = React.Ref<BottomSheetModal>

interface Props {
  children: React.ReactNode
  ref: BottomSheetModalRef
  minPoint: `${15 | 25 | 50 | 75 | 90}%`
  maxPoint: `${15 | 25 | 50 | 75 | 90}%`
  indicatorStyle?: StyleProp<ViewStyle>
  backgroundStyle?: StyleProp<Omit<ViewStyle, 'left' | 'right' | 'position' | 'top' | 'bottom'>>
}

const Modal = forwardRef(function Modal(
  { children, minPoint, maxPoint, indicatorStyle, backgroundStyle }: Props,
  ref: BottomSheetModalRef
) {
  const snapPoints = useMemo(() => [minPoint, maxPoint], [])

  return (
    <BottomSheetModal
      containerStyle={{ backgroundColor: '#0000004d' }}
      backgroundStyle={backgroundStyle}
      handleIndicatorStyle={indicatorStyle}
      ref={ref}
      index={1}
      snapPoints={snapPoints}
    >
      {children}
    </BottomSheetModal>
  )
})

export default Modal
