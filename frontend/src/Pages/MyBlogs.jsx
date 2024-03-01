import NavBar from "../Components/NavBar"
import { useLocation, Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import HomePost from "../Components/HomePost"
import Loader from "../Components/Loader"
import Footer from '../Components/Footer'


const MyBlogs = () => {
    const {search}=useLocation()
    const [posts,setPosts]=useState([])
    const [noResults,setNoResults]=useState(false)
    const [loader,setLoader]=useState(false)
    const {user}=useContext(UserContext)
    
  
    const fetchPosts=async()=>{
      setLoader(true)
      try{
        const res=await axios.get(URL+'/api/posts/user/'+user._id)
        // console.log(res.data)
        setPosts(res.data)
        if(res.data.length===0){
          setNoResults(true)
        }
        else{
          setNoResults(false)
        }
        setLoader(false)
      }
      catch(err){
        console.log(err)
        setLoader(true)
      }
    }
    useEffect(()=>{
      fetchPosts()
    },[search])
  return (
    <>
    <NavBar/>
    <div className="suresh">
      <h1 className="myblog-heading">My Blogs</h1>
      {loader?<div className="loaderDiv"><Loader/></div>:!noResults?posts.map((post)=>(
          <>
              <Link to={user?`/posts/post/${post._id}`:'/login'}>
                 <HomePost key={post._id} post={post}/>
              </Link>
          </>
        )):<div className="warning-message"><h3 className="btn-shine">No posts available</h3></div>}
    </div>
    </>
  )
}

export default MyBlogs
