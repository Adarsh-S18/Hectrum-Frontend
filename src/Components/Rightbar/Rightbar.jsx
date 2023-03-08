import React from 'react'
import './Rightbar.scss'

function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
              <span>Virat </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
              <span>Virat </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' /><p><span>Virat </span>changed their profile picture</p>

            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
              <p><span>Virat </span>changed their profile picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://cdn.pixabay.com/photo/2016/01/14/03/25/sunset-1139293__340.jpg' alt='sd' />
              <p><span>Virat </span>changed their profile picture</p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
