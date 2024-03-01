import {IF} from '../url'
import '../css/homePost.css'

const HomePost = ({post}) => {
  return (
    <>
    <div className="post">
        <div className="image">
          <img src={IF+post.photo} alt="" />
        </div>
        <div className="texts">
          <h2>{post.title}</h2>
          <div className="info">
            <p className="author">@{post.username}</p>
            <div className="spacebw">
              <p className='dateDetails'>{new Date(post.updatedAt).toString().slice(4,15)}</p>
              <p className='timeDetails'>{new Date(post.updatedAt).toString().slice(16,24)}</p>
            </div>
          </div>
          <p className='summary'>{post.desc.slice(0,200)+" ...Read more"}</p>
        </div>
    </div>
    </>
  )
}

export default HomePost
