import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout'
import { slides } from './slides'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout slides={slides} />
  </StrictMode>
)
