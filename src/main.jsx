import {StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "./styles/index.css"
import "./styles/workoutPage.css"
import "./styles/exercisePage.css"
import "./styles/workoutCreateAIPage.css"
import "./styles/workoutsPage.css"
import "./styles/exercisePickerModal.css"
import "./styles/createWorkout.css"
import "./styles/navbar.css"
import "./styles/home.css"
import "./styles/createWorkout.css"
import "./styles/workoutContainer.css"
import "./styles/about.css"
import "./styles/myWorkouts.css"
import "./styles/signIn.css"
import "./styles/signUp.css"
import Navbar from "./compenents/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ExerciseProvider from "./context/ExerciseContext.jsx";
import WorkoutProvider from "./context/WorkoutContext.jsx";
import UserProvider from "./context/UserContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <UserProvider>
              <WorkoutProvider>
                  <ExerciseProvider>
                      <AuthProvider>
                          <App/>
                      </AuthProvider>
                  </ExerciseProvider>
              </WorkoutProvider>
          </UserProvider>
      </BrowserRouter>
  </StrictMode>
)
