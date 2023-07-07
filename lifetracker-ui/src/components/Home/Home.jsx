//import * as React from "react"
// import React, {useState, useEffect} from "react"
import "./Home.css"

export default function Home() {
  return (
    <div className = "home">
        <div className = "homeBase">
            <div className = "intro">
                <h1>LifeTracker</h1>
                <h2>Helping you take back control of your world.</h2>
            </div>
            <div className = "media">
                <img src = "https://lifetracker.up.railway.app/assets/tracker-2a96bfd0.jpg"/>
            </div>
        </div>
        <div className = "tiles">
            <div className= "fitness">
                <h3>Fitness</h3>
                <img src = "https://lifetracker.up.railway.app/assets/athlete-adf95577.jpg"/>
            </div>

            <div className="food">
                <h3>Food</h3>
                <img src = "https://lifetracker.up.railway.app/assets/food-e5a7cc9e.jpg"/>
            </div>

            <div className="rest">
                <h3>Rest</h3>
                <img src = "https://lifetracker.up.railway.app/assets/alarm-cff3823f.jpg"/>
            </div>

            <div className="planner">
                <h3>Planner</h3>
                <img src = "https://lifetracker.up.railway.app/assets/calendar-debf6f3b.jpg"/>
            </div>
        </div>
    </div>
  )
}