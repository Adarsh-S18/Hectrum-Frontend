import React, { useState } from 'react'
import './PostActions.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from '../Comments/Comments';

const PostActions = ({ post }) => {

  const [commentOpen,setCommentOpen] =useState(false)

  const liked = false;

  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt='' />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>{post.name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
          <div className="info">
            <div className="item">
              {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> }
              20,293 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon/>
              784 Comments
            </div>
            <div className="item">
              <ShareOutlinedIcon />
               5 Shares
            </div>
          </div>
          {commentOpen && <Comments />}
        </div>
      </div>
    </div>
  )
}

export default PostActions
