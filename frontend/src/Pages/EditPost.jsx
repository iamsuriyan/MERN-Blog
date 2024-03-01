import { useState, useContext, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import {ImCross} from 'react-icons/im'
import axios from 'axios'
import { URL } from '../url'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditPost = () => {
    const postId=useParams().id
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [category,setCategory]=useState("")
    const [categories,setCategories]=useState([])
    const [message,setMessage]=useState(false)

    const fetchPost=async()=>{
      try{
        const res=await axios.get(URL+"/api/posts/"+postId)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        setFile(res.data.photo)
        setCategories(res.data.categories)
      }
      catch(err){
        console.log(err)
      }
    }

    const handleUpdate=async(e)=>{
      setMessage(true)
      toast.info("please wait");
      e.preventDefault()
      const post={
        title,
        desc,
        username:user.username,
        userId:user._id,
        categories:categories
      }
      if(file){
        const data=new FormData()
        const filename=Date.now()+file.name
        data.append("img",filename)
        data.append("file",file)
        post.photo=filename

        try{
          const imgUpload=await axios.post(URL+"/api/upload",data)
        }catch(err){
          console.log(err)
        }
      }
      //post upload
      try{
        const res=await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
        setMessage(false)
        navigate("/posts/post/"+res.data._id)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchPost()
    },[postId])

    const addCategory=()=>{
        let updatedCats=[...categories]
        updatedCats.push(category)
        setCategory("")
        setCategories(updatedCats)
    }
    const deleteCategory=(index)=>{
      let updatedCats=[...categories]
      updatedCats.splice(index)
      setCategories(updatedCats)
    }
  return (
    <>
    <NavBar/>
    <div className="mainCreate">
        <div className="wrapSmall">
        <ToastContainer/>
        <h1>Update a post</h1>
        <form className='sabari' action="">
            <input onChange={(e)=>setTitle(e.target.value)} value={title} className='titlePost' type="text" placeholder="Enter post title"/>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" placeholder=""/>
            <div className="categoryCreate">
                <div className="categoryCreatePost">
                    <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Enter post category"/>
                    <div onClick={addCategory} className="buttonForCreate">Add</div>
                </div>
                <div className="wrapper">
                    {categories?.map((item,index)=>(
                        <div key={index} className="CategoryType">
                            <p>{item}</p>
                            <p onClick={()=>deleteCategory(index)} className='cross'><ImCross/></p>
                        </div>
                    ))}
                </div>
            </div>
            <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} rows={15} cols={30} placeholder='Enter post description'/>
            <button className='postCreateBtn' onClick={handleUpdate}>Update</button>
        </form>
        </div>
      </div>
      
    </>
  )
}

export default EditPost
