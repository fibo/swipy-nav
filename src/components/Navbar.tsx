import { MouseEventHandler, PropsWithChildren, useMemo } from 'react'
import { SwiperProps } from './Swiper'
import { Slide, SlideId } from '../slides'

// Usually this info is in translations files.
const navbarItemLabel: Record<SlideId, string> = {
  home: 'Home',
  settings: 'Settings',
  notifications: 'Notifications'
}

type NavbarItemProps = {
  isActive: boolean
  onClick: MouseEventHandler<HTMLAnchorElement>
}

function NavbarItem({
  isActive,
  onClick,
  children
}: PropsWithChildren<NavbarItemProps>) {
  return (
    <div className={`navbar__item ${isActive ? 'navbar__item--active' : ''}`}>
      <a onClick={onClick}>{children}</a>
    </div>
  )
}

type NavbarProps = Pick<
  SwiperProps,
  'currentSlideIndex' | 'setCurrentSlideIndex'
> & {
  slides: Slide[]
}

type Item = NavbarItemProps & {
  id: SlideId
  label: string
}

export function Navbar({
  currentSlideIndex,
  setCurrentSlideIndex,
  slides
}: NavbarProps) {
  const items = useMemo<Item[]>(
    () =>
      slides.map(({ id }, index) => {
        const isActive = currentSlideIndex == index
        return {
          id,
          isActive,
          label: navbarItemLabel[id],
          onClick: (event) => {
            event.preventDefault()
            if (isActive) return
            setCurrentSlideIndex(index)
          }
        }
      }),
    [currentSlideIndex, slides]
  )

  return (
    <nav className="navbar">
      {items.map(({ id, label, ...props }) => {
        return (
          <NavbarItem key={id} {...props}>
            {label}
          </NavbarItem>
        )
      })}
    </nav>
  )
}
