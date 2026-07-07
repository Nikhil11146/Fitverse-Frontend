import {StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./index.css"
import Navbar from "./compenents/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <Navbar/>
              <App/>
          </AuthProvider>
      </BrowserRouter>
  </StrictMode>
)
