

import { useState, createContext, useEffect } from 'react';
import Cookies from 'js-cookie'
import {api} from "../utils//api"


const AuthContext =createContext();

export default AuthContext;

export function AuthProvider({children}){
  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    const token=Cookies.get('token')
      if(token) {
        api.getMe()
        .then((data)=> setUser(data))
        .catch(()=> setUser(null))
        .finally(()=>setLoading(false))
      }else{
        setLoading(false)
      }
  },[])

  const login = async(identifier, password)=>{
    const data = await api.login(identifier, password)
    Cookies.set('token', data.jwt, {expires: 3})
    setUser(data.user)
  }
  

  const register = async(username , email , password)=>{
    const data = await api.register(username, email, password)
    Cookies.set('token', data.jwt,{expires: 3})
    setUser(data.user)
  }

  const logout = ()=>{
    Cookies.remove('token')
    setUser(null)
  }
  return(
    <AuthContext.Provider value={{user, loading, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  )
}

