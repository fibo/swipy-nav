import { useState } from 'react'
import { Swiper, SwiperProps } from './Swiper'
import { Navbar } from './Navbar.tsx'
import { Home } from '../pages/Home.tsx'
import { Settings } from '../pages/Settings.tsx'

const slides: SwiperProps['slides'] = [
  {
    id: 'home',
    component: <Home />
  },
  {
    id: 'settings',
    component: <Settings />
  }
]

export function Layout() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <>
      <Swiper
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
      <Navbar currentSlideIndex={currentSlideIndex} />
    </>
  )
}
