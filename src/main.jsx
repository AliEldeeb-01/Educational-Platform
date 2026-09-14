import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DisplayContextProvider } from './context/DisplayContext'
import { CartContextProvider } from './context/CartContext.jsx'
import { RegisterSupabaseProvider } from './context/supabaseContext.jsx'


createRoot(document.getElementById('root')).render(
  
    <DisplayContextProvider>
      <CartContextProvider>
        <RegisterSupabaseProvider>
          <App />
        </RegisterSupabaseProvider>
      </CartContextProvider>
    </DisplayContextProvider>
  
)
