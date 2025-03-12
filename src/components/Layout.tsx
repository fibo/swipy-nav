import { useState } from 'react'
import { Swiper } from '#/components/Swiper'
import { Navbar } from '#/components/Navbar'
import { Slide } from '#/slides'

type Props = {
  slides: Slide[]
}

export function Layout({ slides }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <>
      <Swiper
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        slides={slides}
      />
      <Navbar
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        slides={slides}
      />
    </>
  )
}
