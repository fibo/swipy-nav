import { MouseEventHandler, useMemo } from 'react'
import { Icon, IconName } from '#/components/Icon'

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
  iconName: IconName
  label: string
}

function NavbarItem({
  isActive,
  onClick,
  iconName,
  label
}: NavbarItemProps) {
  return (
    <button
      className={`navbar__item ${isActive ? 'navbar__item--active' : ''}`}
      onClick={onClick}
    >
      <Icon name={iconName} />
      <span> {label} </span>
    </button>
  )
}

type NavbarProps = {
  activeNavbarItemIndex: number
  setCurrentSlideIndex: (index: number) => void
  slideIds: string[]
}

export function Navbar({
  activeNavbarItemIndex,
  setCurrentSlideIndex,
  slideIds
}: NavbarProps) {
  const items = useMemo<Array<NavbarItemProps & { id: string }>>(
    () => slideIds.map((id, index) => {
      const isActive = activeNavbarItemIndex == index
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
    [activeNavbarItemIndex, slideIds, setCurrentSlideIndex]
  )

  return (
    <nav className="navbar">
      {items.map(({ id, ...props }) => <NavbarItem key={id} {...props} />)}
    </nav>
  )
}
