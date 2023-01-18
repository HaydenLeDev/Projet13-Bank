import { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Form() {
  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: "tony@stark.com",
    password: "password123",
  })
  const [checked, setCheck] = useState(false)

  const onChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value //Quand on passe dans onchange on fusionne l'ancien etat avec la nouveauté
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/api/v1/user/login", credentials)
    .then(res => {
      console.log(res)
      navigate('/user/dashboard')
    })
    .catch(error => console.log(error))
    console.log(credentials, checked)
  }


  const handleChangeCheckBox = () => {
    setCheck(!checked)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input
          type="checkbox"
          id="remember-me"
          onChange={handleChangeCheckBox}
        />
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  )
}

export default Form;
