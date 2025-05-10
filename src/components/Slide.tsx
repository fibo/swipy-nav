import { PropsWithChildren, useEffect, useRef } from 'react'

type Props = {
  index: number
  currentSlideIndex: number
}

export function Slide({ index, currentSlideIndex, children }: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (index !== currentSlideIndex) return
    element.scrollIntoView({ behavior: 'smooth' })
  }, [ref, index, currentSlideIndex])

  return <div ref={ref} className="slide">{children}</div>
}
