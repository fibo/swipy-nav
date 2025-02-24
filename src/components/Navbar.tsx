import {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useMemo
} from 'react'
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
}

function NavbarItem({
  isActive,
  children
}: PropsWithChildren<NavbarItemProps>) {
  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
    event.preventDefault()
  }, [])

  return (
    <div className={`navbar__item ${isActive ? 'navbar__item--active' : ''}`}>
      <a onClick={onClick}>{children}</a>
    </div>
  )
}

type NavbarProps = Pick<SwiperProps, 'currentSlideIndex'> & {
  slides: Slide[]
}

export function Navbar({ currentSlideIndex, slides }: NavbarProps) {
  const labels = useMemo<string[]>(
    () => slides.map(({ id }) => navbarItemLabel[id]),
    [slides]
  )

  return (
    <nav className="navbar">
      {slides.map(({ id }, index) => (
        <NavbarItem key={id} isActive={currentSlideIndex == index}>
          {labels[index]}
        </NavbarItem>
      ))}
    </nav>
  )
}
