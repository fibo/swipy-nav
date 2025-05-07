import { Dispatch, PointerEventHandler, ReactNode, SetStateAction, useCallback, useMemo, useRef } from 'react'

export type SwiperProps = {
  slides: Array<{
    id: string
    component: ReactNode
  }>
  currentSlideIndex: number
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>
}

const swipeDelta = 25

export function Swiper({
  currentSlideIndex,
  setCurrentSlideIndex,
  slides
}: SwiperProps) {
  const startX = useRef(0)
  const endX = useRef(0)

  const numSlides = useMemo(() => slides.length, [slides])

  const onPointerDown = useCallback<PointerEventHandler<HTMLDivElement>>(
    (event) => {
      startX.current = event.clientX
    },
    []
  )

  const onPointerMove = useCallback<PointerEventHandler<HTMLDivElement>>(
    (event) => {
      endX.current = event.clientX
    },
    []
  )

  const onPointerUp = useCallback(() => {
    // Do nothing if some text is selected.
    if (getSelection()?.toString()) return
    // Check if swipe is long enough to change slide.
    if (startX.current - endX.current > swipeDelta) {
      setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, numSlides - 1)
      )
    } else if (endX.current - startX.current > swipeDelta) {
      setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }
  }, [setCurrentSlideIndex, numSlides])

  return (
    <div
      className="swiper"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className="swiper__wrapper"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {slides.map(({ id, component }) => (
          <div key={id} className="swiper__slide" data-slideid={id}>{component}</div>
        ))}
      </div>
    </div>
  )
}
