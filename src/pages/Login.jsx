
import { useNavigate } from "react-router";
import { useAuth } from "../utils/useAuth";
import { useState } from "react";


export default function Login (){
  const {login} =useAuth()
  const navigate = useNavigate()
  const [identifier, setIdentifier]=useState('')
  const [password, setPassword] =useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await login(identifier, password)
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return(
    <section className="login-page-container">
      <h2>Login</h2>
          <form onSubmit={handleSubmit}>
      <input 
      type="email"
      placeholder="Email"
      value={identifier}
      onChange={(e)=> setIdentifier(e.target.value)}
      />
      <input 
      type="password"
      placeholder="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button type="submit">Connexion</button>
    </form>
    </section>
  )
}