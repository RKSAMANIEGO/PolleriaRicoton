import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './core/store/Theme/ThemeProvider.jsx'
import { CartProvider } from './shared/components/cart/CartContext.jsx'
import CustomModalProvider from './shared/hooks/modal/CustomModalProvider.jsx'
import { AppProvider } from './core/store/App/AppProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AppProvider>
      <CartProvider>
      <CustomModalProvider>
        <App />
      </CustomModalProvider>
      </CartProvider>
    </AppProvider>
    </ThemeProvider>
  </StrictMode>
)
