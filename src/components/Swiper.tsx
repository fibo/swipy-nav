import { ReactNode, useEffect, useMemo, useRef } from 'react'
import { Slide } from '#/components/Slide'

type Props = {
  currentSlideIndex: number
  setCurrentSlideIndex: (index: number) => void
  setActiveNavbarItemIndex: (index: number) => void
  slides: Array<{
    id: string
    component: ReactNode
  }>
}

function computeIndex(
  numSlides: number,
  scrollLeft: number,
  scrollWidth: number,
): number {
  return (numSlides * scrollLeft) / scrollWidth /* rounding */ + 0.5 | 0
}

export function Swiper({
  currentSlideIndex,
  setCurrentSlideIndex,
  slides,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const ticking = useRef(false)

  const numSlides = useMemo(() => slides.length, [slides])

  const isSupported = useMemo(() => {
    const element = ref.current
    if (!element) return
    return {
      scroll: 'onscroll' in element,
      scrollend: 'onscrollend' in element,
    }
  }, [ref])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!isSupported) return
    // Safari does not support scrollend or scrollsnapchanging events.
    // Fallback to scroll event.
    if (isSupported.scrollend) {
      if (isSupported.scrollend) {
        element.addEventListener('scrollend', () => {
          const { scrollLeft, scrollWidth } = element
          setCurrentSlideIndex(computeIndex(numSlides, scrollLeft, scrollWidth))
        }, { passive: true })
      }
    } else if (isSupported.scroll) {
      element.addEventListener('scroll', () => {
        if (ticking.current) return
        requestAnimationFrame(() => {
          // const { scrollLeft, scrollWidth } = event.target as HTMLDivElement
          // const computedIndex = computeIndex(slides.length, scrollLeft, scrollWidth)
          ticking.current = false
        })
        ticking.current = true
      }, { passive: true })
    }
  }, [ref, isSupported, numSlides])

  return (
    <div ref={ref} className="swiper">
      {slides.map(({ id, component }, index) => (
        <Slide
          key={id}
          currentSlideIndex={currentSlideIndex}
          index={index}
        >{component}
        </Slide>
      ))}
    </div>
  )
}
