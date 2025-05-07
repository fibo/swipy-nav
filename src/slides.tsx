import { ReactNode } from 'react'
import { Home } from '#/pages/Home'
import { Notifications } from '#/pages/Notifications'
import { Settings } from '#/pages/Settings'

export type Slide = {
  id: string
  component: ReactNode
}

export const slides: Slide[] = [
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
