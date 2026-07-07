import {StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./index.css"
import Navbar from "./compenents/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ExerciseProvider from "./context/ExerciseContext.jsx";
import WorkoutProvider from "./context/WorkoutContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <WorkoutProvider>
              <ExerciseProvider>
                  <AuthProvider>
                      <App/>
                  </AuthProvider>
              </ExerciseProvider>
          </WorkoutProvider>
      </BrowserRouter>
  </StrictMode>
)
