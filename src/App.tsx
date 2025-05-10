import { Swiper } from '#/components/Swiper'
import { Navbar } from '#/components/Navbar'
import { slides } from '#/slides'
import { useEffect, useState } from 'react'

const slideIds = slides.map((slide) => slide.id)

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState(0)

  // Sync activeNavbarItemIndex with currentSlideIndex.
  useEffect(() => {
    setActiveNavbarItemIndex(currentSlideIndex)
  }, [currentSlideIndex])

  console.log('currentSlideIndex', currentSlideIndex, 'activeNavbarItemIndex', activeNavbarItemIndex)

  return (
    <>
      <Swiper
        currentSlideIndex={currentSlideIndex}
        setActiveNavbarItemIndex={setActiveNavbarItemIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        slides={slides}
      />

      <Navbar
        activeNavbarItemIndex={activeNavbarItemIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        slideIds={slideIds}
      />
    </>
  )
}
