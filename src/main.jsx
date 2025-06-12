import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './core/store/Theme/ThemeProvider.jsx'
import { CartProvider } from './shared/components/cart/MockCartContext.jsx'
import CustomModalProvider from './shared/hooks/modal/CustomModalProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <CartProvider>
      <CustomModalProvider>
        <App />
      </CustomModalProvider>
      </CartProvider>
    </AppProvider>
  </StrictMode>
)
