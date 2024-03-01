/* eslint-disable react/prop-types */
import { IF } from "../url"

const ProfilePosts = ({p}) => {
  return (
    <>
    <div className="post profile-post-01 doms">
        <div className="image">
          <img src={IF+p.photo} alt="" />
        </div>
        <div className="texts">
          <h2>{p.title}</h2>
          <div className="info">
            <p className="author">@{p.username}</p>
            <div className="dateAndTime">
              <p>{new Date(p.updatedAt).toString().slice(4,15)}</p>
              <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
            </div>
          </div>
          <p className='summary'>{p.desc.slice(0,200)+" ...Read more"}</p>
        </div>
    </div>
    </>
  )
}

export default ProfilePosts
