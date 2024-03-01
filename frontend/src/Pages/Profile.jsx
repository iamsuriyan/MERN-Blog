import NavBar from "../Components/NavBar"
import '../css/profile.css'
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import {IF,URL} from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"

const Profile = () => {
  const param=useParams().id
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
  const [updated,setUpdated]=useState(false)

  const fetchProfile=async ()=>{
    try{
       const res=await axios.get(URL+"/api/users/"+user._id)
       setUsername(res.data.username)
       setEmail(res.data.email)
       setPassword(res.data.password)
    }
    catch(err){
       console.log(err)
    }
  }

  const handleUserUpdate=async ()=>{
    setUpdated(false)
    try{
      const res=await axios.put(URL+"/api/users/"+user._id,{username,email,password},{withCredentials:true})
      // console.log(res.data)
      setUpdated(true)
  
    }
    catch(err){
      console.log(err)
      setUpdated(false)
    }
  
  }

  const handleUserDelete=async()=>{
    try{
      const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
      setUser(null)
      navigate("/")
      // console.log(res.data)
  
    }
    catch(err){
      console.log(err)
    }
  }


  useEffect(()=>{
    fetchProfile()
  
  },[param])
  
  return (
    <>
    <NavBar/>
      <div className="mainProfile">
        <div className="rightProfile">
            
                <div className="smallProfileRight">
                    <h1>Profile</h1>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username" type="text"/>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" type="email"/>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" type="password"/>
                    <div className="buttonforProfile">
                        <button onClick={handleUserUpdate}>Update</button>
                        <button onClick={handleUserDelete} className="deleteBtn">Delete</button>
                    </div>
                    {updated && <h3>User updated successfully!</h3>}
                </div>
            
        </div>
      </div>
    </>
  )
}

export default Profile
