import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Appficha from './components/Appficha.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appficha />
  </StrictMode>,
)
