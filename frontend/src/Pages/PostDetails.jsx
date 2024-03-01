import NavBar from '../Components/NavBar'
import '../css/postDetails.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL, IF } from '../url'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Loader from '../Components/Loader'
import PostComments from '../Components/PostComments'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetails = () => {
  const postId=useParams().id
  const [post,setPost]=useState({})
  const {user}=useContext(UserContext)
  const [comment,setcomment]=useState("")
  const [comments,setComments]=useState([])
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()


  const fetchPost=async()=>{   
    try{
      const res=await axios.get(URL+'/api/posts/'+postId)
      setPost(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  const handleDeletePost=async()=>{
    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPost()
  },[postId])

  const fetchPostComments=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)
    }catch(err){
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()
  },[postId])

  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",{comment:comment,author:user.username,postId:postId,userId:user._id},{withCredentials:true})
      window.location.reload(true)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <NavBar/>
  {loader?<div className="loaderDiv"><Loader/></div>:<div className="maja">
  <div className="circulate">
  <div className="mainDetails">
  <div className="contentDetails">
            <h1>{post.title}</h1>
            {user?._id===post?.userId && 
            <div className="iconDetails">
                <p onClick={()=>navigate("/edit/"+postId)}><BiEdit/></p>
                <p onClick={handleDeletePost}><MdDelete/></p>
            </div>}
        </div>
        <div className="postTime">
            <div className="info">
                <p className="author">{post.username}</p>
                <div className="spacebw">
                    <p className='dateDetails'>{new Date(post.updatedAt).toString().slice(4,15)}</p>
                    <p className='timeDetails'>{new Date(post.updatedAt).toString().slice(16,24)}</p>
                </div>
            </div>
        </div>
        <div className="imagediv007">
            <img className='detailImage' src={IF+post.photo} alt="" />
        </div>
        <p className='detailed-desc'>{post.desc}</p>
        <div className="categoryDetail">
            <h3>Categories:</h3>
            <div className="mainCategories">
              {post.categories?.map((c,i)=>(
                <>
                  <div key={i} className="category1">{c}</div>
                </>
              ))}
            </div>
      </div>
      <div className="comments">
            <h3>Comments:</h3>
            {comments?.map((c)=>(
              <PostComments key={c._id} c={c} post={post}/>
            ))}
        </div>
      {/*write a comment*/}
      <div className="addComment">
          <input onChange={(e)=>setcomment(e.target.value)} type="text" placeholder='Write a comment'/>
          <button onClick={postComment}>Add comment</button>
      </div>
    </div>
  </div>
  </div>}
    </>
  )
}

export default PostDetails
