import React, { useContext } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';


function Login() {
  const {login} = useContext(AuthContext)
  const handleLogin =()=>{
    login();
  }
  return (
    <div className='main-login'>
      <div className='sub-login'>
        <div className='mainbox'>
          <div className='subbox'>
            <div className='firstsubbox'>
              <div className='doo'>
                <p>Explore the world of<br>
                </br>Spectrum !</p>
              </div>
              <img alt='img' src='https://img.freepik.com/premium-vector/smiling-multicultural-millennial-crowd-people_316839-2158.jpg?w=900'>
              </img>
              <div className='dooo'>
                <p>The currency of real networking is not greed<br></br> but generosity.Expand and Explore yournetwork through<br></br>  Spectrum !</p>
              </div>
              <p>Don't have an account?</p>
              <div className='butt'>
              <Link to='/signup'><button className='regbut'>Register</button></Link>
              </div>
            </div>
            <div className='secsubbox'>
              <h2>Login</h2>
              <div className='fields'>
                <TextField className='form' id="standard-basic" label="Email" variant="standard" />
              </div>
              <div className='fields'>
                <TextField className='form' id="standard-basic" label="Password" variant="standard" />
              </div>
              <div className='buttonsub'>
             <button className='logbut' onClick={handleLogin}>Login</button>
              </div>
              <div className='forgot'>
                <u>Forgot Password?</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
