import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Speech from './Speech.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Speech/>
  </StrictMode>,
)
