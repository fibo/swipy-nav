import { ReactNode } from 'react'
import { Home } from '#/pages/Home'
import { Notifications } from '#/pages/Notifications'
import { Settings } from '#/pages/Settings'

export const slides: Array<{
  id: string
  component: ReactNode
}> = [
  {
    id: 'home',
    component: <Home />,
  },
  {
    id: 'settings',
    component: <Settings />,
  },
  {
    id: 'notifications',
    component: <Notifications />,
  },
]
