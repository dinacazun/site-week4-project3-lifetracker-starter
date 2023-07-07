import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar({isLoggedIn}) {
  return (
    <nav className = "navbar">
      <Link className = "homeLink" to = "/" ><img src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/></Link>
      <Link className = "link" to = "/activity">Activity</Link>
      <Link className = "link" to = "/exercise">Exercise</Link>
      <Link className = "link" to = "/nutrition">Nutrition</Link>
      <Link className = "link" to = "/sleep">Sleep</Link>
      {isLoggedIn?(
        <Link className = "link" to = "/">
        <button className = "signOut">Sign Out</button>
        </Link>
      ):(
        <div>
          <Link className = "link" to = "/login">
          <button className = "signIn">Sign In</button>
          </Link>
          <Link className = "link" to = "/register">
          <button className = "register">Register</button>
          </Link>
        </div>
      )}
    </nav>
  )
}