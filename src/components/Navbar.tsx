import { MouseEventHandler, PropsWithChildren, useMemo } from 'react'
import { SwiperProps } from '#/components/Swiper'
import { Icon, IconName } from '#/components/Icon'
import { Slide, SlideId } from '#/slides'

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
  iconName: IconName
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
          iconName: id,
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
      {items.map(({ id, label, iconName, ...props }) => {
        return (
          <NavbarItem key={id} {...props}>
            <Icon name={iconName}></Icon>
            <span> {label} </span>
          </NavbarItem>
        )
      })}
    </nav>
  )
}
