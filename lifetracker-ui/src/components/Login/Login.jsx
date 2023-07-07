import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
// import MedicalResearch from "../MedicalResearch/MedicalResearch"
// import undraw_medical_research from "../../assets/undraw_medical_research_deep_blue.svg"
import "./Login.css"

export default function Login({ setAppState, setLoggedIn }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form)
      if (res?.data) {
        setAppState(res.data)
        setIsLoading(false)
        navigate("/activity")
        setLoggedIn(true)
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }

  return (
    <div className="Login">
      <div className="media">
        <img src = "data:image/png;base64,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"/>
      </div>

      <div className="card">
        <h2>Welcome</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            New to Us? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}