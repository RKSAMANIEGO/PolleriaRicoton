import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './core/store/Theme/ThemeProvider.jsx'
import CustomModalProvider from './shared/hooks/modal/CustomModalProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CustomModalProvider>
        <App />
      </CustomModalProvider>
    </ThemeProvider>
  </StrictMode>
)
