import { MouseEventHandler, PropsWithChildren, useCallback } from 'react'
import { SwiperProps } from './Swiper'

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

type NavbarProps = Pick<SwiperProps, 'currentSlideIndex'>

export function Navbar({ currentSlideIndex }: NavbarProps) {
  console.log(currentSlideIndex)

  return (
    <nav className="navbar">
      <NavbarItem isActive={currentSlideIndex == 0}>Home</NavbarItem>
      <NavbarItem isActive={currentSlideIndex == 1}>Settings</NavbarItem>
    </nav>
  )
}
