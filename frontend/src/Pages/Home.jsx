import axios from "axios"
import HomePost from "../Components/HomePost"
import NavBar from "../Components/NavBar"
import { URL, IF } from "../url"
import { useContext, useEffect, useState } from "react"
import { useLocation, Link} from "react-router-dom"
import Loader from '../Components/Loader'
import { UserContext } from "../context/UserContext"
import Footer from "../Components/Footer"

const Home = () => {
  const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+'/api/posts/'+search)
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
    <div className="wholewrap">
    <NavBar/>
      <div className="suresh">
        {loader?<div className="loaderDiv"><Loader/></div>:!noResults?posts.map((post)=>(
          <>
              <Link to={user?`/posts/post/${post._id}`:'/login'}>
                 <HomePost key={post._id} post={post}/>
              </Link>
          </>
        )):<div className="warning-message"><h3 className="btn-shine">No posts available</h3></div>}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
