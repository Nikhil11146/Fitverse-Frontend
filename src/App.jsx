import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Workouts from "./pages/WorkoutsPage.jsx";
import Exercises from "./pages/ExercisesPage.jsx";
import About from "./pages/AboutPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import SignIn from "./pages/SignInPage.jsx";
import Navbar from "./compenents/Navbar.jsx";
import Footer from "./compenents/Footer.jsx";
import Workout from "./pages/workoutPage.jsx";
import WorkoutCreate from "./pages/WorkoutCreatePage.jsx";
import WorkoutCreateAI from "./pages/WorkoutCreateAIPage.jsx";

export default function App() {
  return (
      <div className="app">
          <Navbar/>
          <div className="app-content">
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/exercises' element={<Exercises/>}/>
                  <Route path='/workouts' element={<Workouts/>}/>
                  <Route path='/about' element={<About/>}/>

                  <Route path='/sign-in' element={<SignIn/>}/>
                  <Route path='/sign-up' element={<SignUp/>}/>

                  <Route path='/workouts/create' element={<WorkoutCreate/>}/>
                  <Route path='/workouts/create-ai' element={<WorkoutCreateAI/>}/>
                  <Route path='/workouts/:id' element={<Workout/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>


  )
}

