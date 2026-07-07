import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Workouts from "./pages/WorkoutsPage.jsx";
import Exercises from "./pages/ExercisesPage.jsx";
import About from "./pages/AboutPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import SignIn from "./pages/SignInPage.jsx";

export default function App() {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercises' element={<Exercises/>}/>
          <Route path='/workouts' element={<Workouts/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>

  )
}

