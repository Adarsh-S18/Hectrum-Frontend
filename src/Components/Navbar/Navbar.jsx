import React, { useContext } from 'react'
import './Navbar.scss'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from 'react-router-dom';
import { DarkmodeContext } from '../../Context/DarkmodeContext';
import { AuthContext } from '../../Context/authContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext)
  const { toggle, darkMode } = useContext(DarkmodeContext)
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>Spectrum</span>
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' />
        </div>
        <div className='mmm'>
          {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : < DarkModeOutlinedIcon onClick={toggle} />}
        </div>
        <div className="right">
          <Link to='/profile/id' style={{ textDecoration: 'none' }}>
            <div className="user">
              <img src={currentUser.profilepic} alt='sd' />
              <span>{currentUser.name}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
