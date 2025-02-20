import { MouseEventHandler, useCallback } from 'react'

export function Navbar() {
  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
    event.preventDefault()
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar__item">
        <a onClick={onClick}>Home</a>
      </div>
      <div className="navbar__item">
        <a onClick={onClick}>Settings</a>
      </div>
    </nav>
  )
}
