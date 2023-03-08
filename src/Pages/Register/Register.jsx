import React from 'react'
import TextField from '@mui/material/TextField';
import './Register.css'
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div>
            <div className='main-login'>
                <div className='sub-login'>
                    <div className='mainbox'>
                        <div className='subbox'>
                            <div className='secsubbox'>
                                <h2>Register</h2>
                                <div className='fields'>
                                    <TextField className='form' id="standard-basic" InputLabelProps={{ style: { fontSize: 13 } }} label="UserName" variant="standard" />
                                </div>
                                <div className='fields'>
                                    <TextField className='form' id="standard-basic" InputLabelProps={{ style: { fontSize: 13 } }} label="Mobile Number" variant="standard" />
                                </div>
                                <div className='fields'>
                                    <TextField className='form' id="standard-basic" InputLabelProps={{ style: { fontSize: 13 } }} label="Email" variant="standard" />
                                </div>
                                <div className='fields'>
                                    <TextField className='form' id="standard-basic" InputLabelProps={{ style: { fontSize: 13 } }} label="Password" variant="standard" />
                                </div>
                                <div className='buttonsub'>
                                    <button className='logbut'>Register</button>
                                </div>
                            </div>
                            <div className='firstsubbox'>
                                <div className='doo'>
                                    <p>Explore the world of<br>
                                    </br>Spectrum !</p>
                                </div>
                                <img alt='img' src='https://img.freepik.com/free-vector/messenger-concept-illustration_114360-860.jpg?w=900&t=st=1672242360~exp=1672242960~hmac=74c08dc7685760dfeb7515bc2ffe57330ae6df021e11ef2f949c5a33e764048a'>
                                </img>
                                <div className='dooo'>
                                    <p>The currency of real networking is not greed<br></br> but generosity.Expand and Explore yournetwork through<br></br>  Spectrum !</p>
                                </div>
                                <p>Already in the Spectrum universe ?</p>
                                <div className='butt'>
                                 <Link to='/login'><button className='regbut'>Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
