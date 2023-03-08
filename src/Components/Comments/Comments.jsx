import React, { useContext } from 'react'
import './Comments.scss'
import {AuthContext} from '../../Context/authContext'

function Comments() {
    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
          id: 1,
          desc: "Great boys! Keep Going On!  🔥",
          name: "Indian Super League",
          userId: 1,
          profilePicture:
            "https://www.indiansuperleague.com/static-resources/waf-images/content/2014/aug/630/lsilogolaunch281014.jpg",
        },
        {
          id: 2,
          desc: "Well played ! ",
          name: "Jamshedpur FC ",
          userId: 2,
          profilePicture:
            "https://26five.com/wp-content/uploads/2020/03/jfc_thumbnail_tinified.jpg",
        },
      ];

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilepic} alt=''/>
            <input type='text' placeholder='Write a comment...'/>
            <button>Send</button>
        </div>
    {comments.map(comment =>(
        <div className="comment">
            <img  src={comment.profilePicture} alt='' />
            <div className="info">
                <span >{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>
    ))}
    </div>
  )
}

export default Comments
