import {
  Fragment,
  ReactNode,
  useState,
  useRef,
  useCallback,
  PropsWithChildren,
  PointerEventHandler
} from 'react'

type SwiperProps = {
  slides: Array<{
    id: string
    component: ReactNode
  }>
}

export function Swiper({ slides }: SwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const startX = useRef(0)
  const endX = useRef(0)

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
    if (startX.current - endX.current > 50) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1))
    } else if (endX.current - startX.current > 50) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }
  }, [])

  return (
    <div
      className="swiper"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className="swiper-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map(({ id, component }) => (
          <Fragment key={id}>{component}</Fragment>
        ))}
      </div>
    </div>
  )
}

type SwiperSlideProps = Partial<{
  className: string
}>

export function SwiperSlide({
  children,
  className
}: PropsWithChildren<SwiperSlideProps>) {
  return <div className={`swiper-slide ${className ?? ''}`}>{children}</div>
}
