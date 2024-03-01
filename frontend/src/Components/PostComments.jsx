// import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import { URL } from '../url'
import { useContext } from 'react'
import {UserContext} from "../context/UserContext"

const PostComments = ({c,post}) => {

  const {user}=useContext(UserContext)
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <div className="commentsSection">
                <div className="usernameComment">
                    <h3>@{c.author}</h3>
                    <div className="dateAndTime">
                        <p className='dateDetails'>{new Date(c.updatedAt).toString().slice(4,15)}</p>
                        <p className='timeDetails'>{new Date(c.updatedAt).toString().slice(16,24)}</p>
                        {user?._id===c?.userId?<div className="iconDetails">
                            <p onClick={()=>deleteComment(c._id)}><MdDelete/></p>
                        </div>:""}
                    </div>
                </div>
                <p className='comment2'>{c.comment}</p>
            </div>
    </>
  )
}

export default PostComments
