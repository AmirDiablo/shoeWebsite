import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BagProvider } from './contexts/BagContext.jsx'
import { FavProvider } from './contexts/FavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BagProvider>
    <FavProvider>
      <App />
    </FavProvider>
    </BagProvider>
  </StrictMode>,
)
