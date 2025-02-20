import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Swiper } from './components/Swiper.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Home } from './pages/Home.tsx'
import { Settings } from './pages/Settings.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Swiper
      slides={[
        {
          id: 'home',
          component: <Home />
        },
        {
          id: 'settings',
          component: <Settings />
        }
      ]}
    />
    <Navbar />
  </StrictMode>
)
