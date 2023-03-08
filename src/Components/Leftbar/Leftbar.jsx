import React, { useContext } from 'react'
import './Leftbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { AuthContext } from '../../Context/authContext';
import { Link } from 'react-router-dom';
function Leftbar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <Link to='/profile/id' style={{ textDecoration: 'none' }}>
            <div className="user">
              <img src={currentUser.profilepic} alt='sd' />
              <span>{currentUser.name}</span>
            </div>
          </Link>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <HomeIcon  className='hii'/>
              <span>Home</span>
            </div>
          </Link>
          <Link to='/friends' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <GroupsIcon />
              <span>Friends</span>
            </div>
          </Link>
          <Link to='/messages' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <MarkChatUnreadIcon />
              <span>Messages</span>
            </div>
          </Link>
          <Link to='/notifications' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <NotificationsActiveRoundedIcon />
              <span>Notifiactions</span>
            </div>
          </Link>
          <Link to='/profile/:id' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="item">
              <AccountCircleRoundedIcon />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
