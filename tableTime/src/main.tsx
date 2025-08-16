import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <StrictMode>
      <ToastContainer />
      <Loader />
      <App />
    </StrictMode>
  </BrowserRouter>
)
