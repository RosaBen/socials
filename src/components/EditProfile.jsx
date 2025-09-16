import { useState, useEffect } from "react";
import { useAuth } from '../utils/useAuth'

export default function EditProfile(){

  const {user, editProfile} =useAuth()
  const [username, SetUsername]= useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [bio, setBio]=useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(()=>{
    if(user){
      SetUsername(user.username || '')
      setEmail(user.email || '')
      setBio(user.bio || '')
    }
  },[user])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      await editProfile(username, email, password, bio)
      setMessage('Profile is updated!')
      setPassword('')
    } catch (error) {
      setMessage('Error:'+error.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username
      </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={e => SetUsername(e.target.value)}
      />
      <label htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor="bio">Biography</label>
      <textarea
        name="bio"
        id="bio"
        value={bio}
        onChange={e => setBio(e.target.value)}
      ></textarea>
      {message && <p>{message}</p>}
      <button type="submit" disabled={loading}>{loading? 'loading...':'Edit Profile'}</button>
    </form>
  )
}