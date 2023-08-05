import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Modal, MovieDeleteModal, MovieDownloadCard } from '../../../components'
import { IMovie } from '../../../models'
import { getMovieListPopular } from '../../../services'

function DownloadScreen() {
  const [moviesPopular, setMoviesPopular] = useState<IMovie[]>([])
  const [movieID, setMovieID] = useState(0)
  const MovieDeleteModalRef = useRef<BottomSheetModal>(null)

  const handleOpenModal = useCallback(() => {
    MovieDeleteModalRef.current?.present()
  }, [])
  const handleCloseModal = useCallback(() => {
    MovieDeleteModalRef.current?.dismiss()
  }, [])

  const handleOnPressDelete = (id: number) => {
    handleOpenModal()
    setMovieID(id)
  }

  useEffect(() => {
    getMovieListPopular()
      .then((movie) => setMoviesPopular(movie))
      .catch((error) => console.log(error))
  }, [])

  return (
    <ScrollView className='px-2' contentContainerStyle={{ gap: 12, paddingVertical: 8 }}>
      <Suspense>
        {moviesPopular.map((movie) => {
          return <MovieDownloadCard key={movie.id} movie={movie} hasDeleteIcon onPressDelete={handleOnPressDelete} />
        })}
      </Suspense>
      <Modal ref={MovieDeleteModalRef} minPoint='50%' maxPoint='50%'>
        <MovieDeleteModal movieID={movieID} onPressCancel={handleCloseModal} />
      </Modal>
    </ScrollView>
  )
}

export default DownloadScreen
