import {ImCross} from 'react-icons/im'
import NavBar from '../Components/NavBar'
import '../css/createPost.css'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreatePost = () => {

    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const {user}=useContext(UserContext)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])
    const [message,setMessage]=useState(false)
    // console.log(file)

    const navigate=useNavigate()

    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }
    const deleteCategory=(i)=>{
      let updatedCats=[...cats]
      updatedCats.splice(i)
      setCats(updatedCats)
    }

    const handleCreate=async(e)=>{
      setMessage(true)
      toast.info("please wait");
      e.preventDefault()
      const post={
        title,
        desc,
        username:user.username,
        userId:user._id,
        categories:cats
      }
      if(file){
        const data=new FormData()
        const filename=Date.now()+file.name
        data.append("img",filename)
        data.append("file",file)
        post.photo=filename
        try{
          const imgUpload=await axios.post(URL+"/api/upload",data)

          // console.log(imgUpload.data)
        }
        catch(err){
          console.log(err)
        }
      }
      try{
        const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
        setMessage(false)
        navigate("/posts/post/"+res.data._id)
        // console.log(res.data)

      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <>
    <NavBar/>
      <div className="mainCreate">
        <div className="wrapSmall">
        <ToastContainer/>
        <h1>Create a post</h1>
        <form className='sabari' action="">
            <input onChange={(e)=>setTitle(e.target.value)} className='titlePost' type="text" placeholder="Enter post title"/>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" placeholder=""/>
            <div className="categoryCreate">
                <div className="categoryCreatePost">
                    <input value={cat} onChange={(e)=>setCat(e.target.value)} type="text" placeholder="Enter post category"/>
                    <div onClick={addCategory} className="buttonForCreate">Add</div>
                </div>
                <div className="wrapper">
                    {cats?.map((c,i)=>(
                        <div key={i} className="CategoryType">
                            <p>{c}</p>
                            <p onClick={()=>deleteCategory(i)} className='cross'><ImCross/></p>
                        </div>
                    ))}
                </div>
            </div>
            <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} placeholder='Enter post description'/>
            <button onClick={handleCreate} className='postCreateBtn'>Create</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default CreatePost
