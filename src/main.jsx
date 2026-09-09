import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Lightning from './Lightning.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lightning/>
    <App />
  </StrictMode>,
)
