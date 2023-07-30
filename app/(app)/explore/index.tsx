import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import { ExploreHeader, Modal, MovieList, SortAndFilterModal } from '../../../components'
import { IMovie } from '../../../models'
import { getMovieListPopular } from '../../../services'

function ExploreScreen() {
  const [moviesPopular, setMoviesPopular] = useState<IMovie[]>([])
  const modalRef = useRef<BottomSheetModal>(null)

  const handleOpenModal = useCallback(() => {
    modalRef.current?.present()
  }, [])

  useEffect(() => {
    getMovieListPopular()
      .then((movie) => setMoviesPopular(movie))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Stack.Screen options={{ header: () => <ExploreHeader onPressIcon={handleOpenModal} /> }} />
      <ScrollView className='px-2' contentContainerStyle={{ gap: 16, paddingVertical: 8 }}>
        <MovieList movies={moviesPopular} />
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
