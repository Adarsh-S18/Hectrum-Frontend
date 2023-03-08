import React from 'react'
import './MessageContent.scss'
function MessageContent({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messagetop">
        <img className='messimg' src='https://i.pinimg.com/564x/6c/bc/56/6cbc564f0cc97aa02e8c47c4d0365364.jpg' alt=''/>
        <span className='messtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at quidem dolores! Nisi reiciendis</span>
      </div>
      <div className="messagebottom">
        1 hour ago
      </div>
    </div>
  )
}

export default MessageContent
