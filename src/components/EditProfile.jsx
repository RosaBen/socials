import { useState, useEffect } from "react";
import { useAuth } from '../utils/useAuth'
import Cookies from 'js-cookie';

export default function EditProfile(){

  const {user, editProfile} =useAuth()
  console.log('login',editProfile)
  const [username, SetUsername]= useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [bio, setBio]=useState('')

  useEffect(()=>{
    if(user){
      SetUsername(user.username || '')
      setEmail(user.email || '')
      setPassword(user.password || '')
      setBio(user.bio || '')
    }
  },[user])

  return (
    <form>
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
      <button type="submit">Edit Profile</button>
    </form>
  )
}