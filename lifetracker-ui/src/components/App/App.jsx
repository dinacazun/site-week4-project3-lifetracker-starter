import "./App.css"
import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import ActivityPage from "../ActivityPage/ActivityPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import NutritionPage from "../ExercisePage/ExercisePage"
import SleepPage from "../ExercisePage/ExercisePage"
import Login from "../Login/Login"
import Register from "../Register/Register"

function App() {
  const [appState, setAppState] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  // localStorage.setItem("userToken", token)

  return (
    <div className = "app">
      <BrowserRouter>
        <Navbar user = {appState.user} isLoggedIn={loggedIn}/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/activity" element = {<ActivityPage loggedIn={loggedIn}/>}/>
          <Route path = "/exercise" element = {<ExercisePage/>}/>
          <Route path = "/nutrition" element = {<NutritionPage/>}/>
          <Route path = "/sleep" element = {<SleepPage/>}/>
          <Route path = "/login" element = {<Login setAppState = {setAppState} setLoggedIn={setLoggedIn}/>}/>
          <Route path = "/register" element = {<Register setAppState = {setAppState} setLoggedIn={setLoggedIn}/>}/>
          {/* pass in setLoggedIn as prop to register, set to true when called */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
