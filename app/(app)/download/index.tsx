import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Modal, MovieDeleteModal, MovieDownloadCard } from '../../../components'

function DownloadScreen() {
  const MovieDeleteModalRef = useRef<BottomSheetModal>(null)

  const handleOpenModal = useCallback(() => {
    MovieDeleteModalRef.current?.present()
  }, [])
  const handleCloseModal = useCallback(() => {
    MovieDeleteModalRef.current?.dismiss()
  }, [])

  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 12, paddingVertical: 8 }}>
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <MovieDownloadCard hasDeleteIcon onPressDelete={handleOpenModal} />
      <Modal ref={MovieDeleteModalRef} minPoint='50%' maxPoint='50%'>
        <MovieDeleteModal onPressCancel={handleCloseModal} />
      </Modal>
    </ScrollView>
  )
}

export default DownloadScreen
