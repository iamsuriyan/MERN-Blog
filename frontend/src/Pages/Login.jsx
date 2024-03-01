import { Link,useNavigate } from 'react-router-dom'
import '../css/login.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import {URL} from '../url'
import { UserContext } from '../context/UserContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const [message,setMessage]=useState(false)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      setMessage(true)
      toast.info("please wait");
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      // console.log(res.data);
      setUser(res.data)
      setMessage(false)
      navigate('/')
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
        <h3><Link to='/register'>Register</Link></h3>
    </div>
    <div className="mainLogin">
      <div className="loginDiv">
      <ToastContainer/>
        <h1>Login to your account</h1>
        <div className="inputBox">
          <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="E-mail address"/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
          <button onClick={handleLogin} className="loginBtn">Login</button>
          {error && <h3 className="wrong-msg">Something went wrong</h3>}
          <div className="notaUser">
            <p>Not a user?</p>
            <p><Link className='regLogin' to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
