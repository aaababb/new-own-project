import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = "https://api.escuelajs.co/api/v1/auth/login"
function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()


    function handleChange(event){
        const {name, value} = event.target;
        setUser ({...user, [name]: value})
    }

    const handleSubmit = async () => {
        try{
            const res = await axios.post(API,user)

            if(res.status === 201){
                navigate ("/")
            }
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <div className='all'>
            <p className='profile-word'>Профиль</p>
            <div className='profile'>
                <img src='https://d3sxshmncs10te.cloudfront.net/icon/premium/png-256/1659814.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcxMDgwMjAzMSwicSI6bnVsbCwiaWF0IjoxNzEwNTQyODMxfQ__.47a45b92f210b0c4049477d1d606c0b4579afa354edadaf490e693e8baf1adfc'/>
                <p className='profile-s'>aaa</p>
            </div>
            <div className='registration '>
                <input onChange={handleChange} type='email' placeholder='Email'/>
                <input onChange={handleChange} type='password' placeholder='Password'/>
                <button onClick={() => handleSubmit()} className='register-btn'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login