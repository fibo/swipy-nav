import { ReactNode } from 'react'
import { Home } from '#/pages/Home'
import { Notifications } from '#/pages/Notifications'
import { Settings } from '#/pages/Settings'

export const slideIds = ['home', 'settings', 'notifications'] as const
export type SlideId = (typeof slideIds)[number]

export type Slide = {
  id: SlideId
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
