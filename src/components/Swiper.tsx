import { useEffect, useRef } from 'react'
import { Slide } from '#/slides'

type Props = {
  currentSlideIndex: number
  setCurrentSlideIndex: (index: number) => void
  slides: Slide[]
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
  slides
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    function updateSlideIndex(element: HTMLDivElement) {
      const { scrollLeft, scrollWidth } = element
      setCurrentSlideIndex(computeIndex(slides.length, scrollLeft, scrollWidth))
    }
    const isSupported = {
      scroll: 'onscroll' in element,
      scrollend: 'onscrollend' in element,
      scrollsnapchanging: 'onscrollsnapchanging' in element,
    }
    // Safari does not support scrollend or scrollsnapchanging events.
    // Fallback to scroll event.
    if (isSupported.scrollend || isSupported.scrollsnapchanging) {
      if (isSupported.scrollend) {
        element.addEventListener('scrollend', (event) => {
          updateSlideIndex(event.target as HTMLDivElement)
        }, { passive: true })
      }
      if (isSupported.scrollsnapchanging) {
        element.addEventListener('scrollendsnapchanging', (event) => {
          updateSlideIndex(event.target as HTMLDivElement)
        }, { passive: true })
      }
    } else if (isSupported.scroll) {
      element.addEventListener('scroll', (event) => {
        if (ticking.current) return
        requestAnimationFrame(() => {
          const { scrollLeft, scrollWidth } = event.target as HTMLDivElement
          const computedIndex = computeIndex(slides.length, scrollLeft, scrollWidth)
          setCurrentSlideIndex(computedIndex)
          ticking.current = false
        })
        ticking.current = true
      }, { passive: true })
    }
  }, [ref, slides, setCurrentSlideIndex])

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const { scrollLeft, scrollWidth } = element
    const computedIndex = computeIndex(slides.length, scrollLeft, scrollWidth)
    if (computedIndex == currentSlideIndex) return
    document.querySelector(`[data-slideindex="${currentSlideIndex}"]`)?.scrollIntoView({ behavior: 'smooth' })
  }, [ref, slides, currentSlideIndex])

  return (
    <div ref={ref} className="swiper">
      {slides.map(({ id, component }, index) => (
        <div key={id} className="swiper__slide" data-slideindex={index}>{component}</div>
      ))}
    </div>
  )
}
