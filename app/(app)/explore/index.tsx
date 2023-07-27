import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { useCallback, useRef } from 'react'
import { ScrollView } from 'react-native'
import { ExploreHeader, Modal, MovieList, SortAndFilterModal } from '../../../components'

function ExploreScreen() {
  const modalRef = useRef<BottomSheetModal>(null)

  const handleOpenModal = useCallback(() => {
    modalRef.current?.present()
  }, [])

  return (
    <>
      <Stack.Screen options={{ header: () => <ExploreHeader onPressIcon={handleOpenModal} /> }} />
      <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
        <MovieList />
        <Modal
          ref={modalRef}
          minPoint='25%'
          maxPoint='75%'
          indicatorStyle={{ backgroundColor: '#ef4444' }}
          backgroundStyle={{ backgroundColor: '#f3f4f6' }}
        >
          <SortAndFilterModal />
        </Modal>
      </ScrollView>
    </>
  )
}

export default ExploreScreen
