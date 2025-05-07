import { MouseEventHandler, PropsWithChildren, useMemo } from 'react'
import { Icon, IconName } from '#/components/Icon'
import { Slide } from '#/slides'

// Usually this info is in translations files.
const navbarItemLabel: Record<string, string> = {
  home: 'Home',
  settings: 'Settings',
  notifications: 'Notifications'
}

const navbarItemIconName: Record<string, IconName> = {
  home: 'home',
  settings: 'gear',
  notifications: 'bell'
}

type NavbarItemProps = {
  isActive: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

function NavbarItem({
  isActive,
  onClick,
  children
}: PropsWithChildren<NavbarItemProps>) {
  return (
    <button
      className={`navbar__item ${isActive ? 'navbar__item--active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type NavbarProps = {
  currentSlideIndex: number
  setCurrentSlideIndex: (index: number) => void
  slides: Slide[]
}

type Item = NavbarItemProps & {
  id: string
  label: string
  iconName: IconName
}

export function Navbar({
  currentSlideIndex,
  setCurrentSlideIndex,
  slides
}: NavbarProps) {
  const items = useMemo<Item[]>(
    () => slides.map(({ id }, index) => {
      const isActive = currentSlideIndex == index
      return {
        id,
        iconName: navbarItemIconName[id],
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
            <Icon name={iconName} />
            <span> {label} </span>
          </NavbarItem>
        )
      })}
    </nav>
  )
}
