import { useState } from 'react'
import { Swiper } from './Swiper'
import { Navbar } from './Navbar.tsx'
import { Slide } from '../slides.tsx'

type Props = {
  slides: Slide[]
}

export function Layout({ slides }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <>
      <Swiper
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <Navbar currentSlideIndex={currentSlideIndex} slides={slides} />
    </>
  )
}
