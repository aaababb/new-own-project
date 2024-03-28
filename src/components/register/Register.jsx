import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import login from '../../assets/svg/login.svg'

import './Register.css'

const API = "https://api.escuelajs.co/api/v1/users/"
const LOGIN_API = "https://api.escuelajs.co/api/v1/auth/login"
const API_PROF = "https://api.escuelajs.co/api/v1/auth/profile"

function Register() {
    const [profile, setProfile] = useState({})
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
})

const navigate = useNavigate()

function handleChange(event){
    const {name, value} = event.target;
    setUser ({...user, [name]: value})
}

const handleLogin = async() =>  {
    try{
        const res = await axios.post(API, user)

        const payload = {
            email: res.data.email,
            password: res.data.password,
        }

        const item = await axios.post(LOGIN_API, payload)


        // console.log(item)

        if(item.status === 201){
            localStorage.setItem("token", item.data.access_token)
            navigate("/")
        }


    }catch(error){
        console.log(error)
    }
}
let token = localStorage.getItem("token")
console.log(token);

const getProfile = async() => {
    try{
        const res = await axios.get(API_PROF,{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        setProfile(res.data)

        console.log(res)
    }catch(error){
        console.log(error)
    }
}
useEffect(() => {
    getProfile()
},[])


  return (
    <div className='all'>
        <p className='profile-word'>Профиль</p>
        <div className='profile'>
            <img src={profile.avatar ? profile.avatar : login}/>
            <p className='profile-s'>aaa</p>
        </div>
        <div className='registration '>
            <input type='text' onChange={handleChange} placeholder='Name'/>
            <input type='email' onChange={handleChange} placeholder='Email'/>
            <input type='password' onChange={handleChange} placeholder='Password'/>
            <button className='register-btn' onClick={() => handleLogin()}>Submit</button>
            <div className='have-account'>
                <p>Already have account?</p>
                <Link to="/Log in" className='login'><a>Log In</a></Link>
            </div>
        </div>
    </div>
  )
}

export default Register