import { useState } from 'react'
import '../css/login.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {URL} from '../url'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const [message,setMessage]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async()=>{
    try{
      setMessage(true)
      toast.info("please wait");
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      setMessage(false)
      // console.log(res.data)
      navigate("/login")

    }
    catch(err){
      setError(true)
      console.log(err);
    }
  }


  return (
    <>
    <div className="navBar custom-nav">
        <h1><Link to='/'>Blog</Link></h1>
        <h3><Link to='/login'>Login</Link></h3>
    </div>
    <div className="mainLogin">
      <div className="loginDiv">
        <ToastContainer/>
        <h1>Create your account</h1>
        <div className="inputBox">
          <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username"/>
          <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="E-mail address"/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
          <button onClick={handleRegister} className="loginBtn">Register</button>
          {error && <h3 className="wrong-msg">Something went wrong</h3>}
          <div className="notaUser">
            <p>Already a user?</p>
            <p><Link className='regLogin' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
