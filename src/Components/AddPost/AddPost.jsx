import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import './AddPost.scss'
import TextField from '@mui/material/TextField';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import Button from '@mui/material/Button';

function AddPost() {

    const { currentUser } = useContext(AuthContext)
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={currentUser.profilepic} alt='' />
                        <div className="details">
                            <TextField  className='textfieldd' id="outlined-basic" label="What's on your mind?" variant="outlined" inputProps={{ style: { height: "10px", width: '400px' } }} InputLabelProps={{ style: { fontSize: 13} }} />
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="info">
                        <div className="item">
                            <Button variant="contained" disableElevation component="label" style={{ overflow: 'hidden', backgroundColor: 'transparent' }}><input hidden accept="image/*" multiple type="file" />
                                <InsertPhotoRoundedIcon style={{ color: "28BB25" }} /> <span style={{ color: "green" }}>Photo</span>
                            </Button>
                        </div>
                        <div className="item">
                            <Button variant="contained" disableElevation component="label" style={{ overflow: 'hidden', backgroundColor: 'transparent' }}><input hidden accept=".mp4" multiple type="file" />
                                <VideocamRoundedIcon style={{ color: "red" }} /><span style={{ color: "red" }}>Video</span>
                            </Button>
                        </div>
                        <div className="item">
                            <Button variant="contained" disableElevation component="label" style={{ overflow: 'hidden', backgroundColor: 'transparent' }}><input hidden accept="image/*" multiple type="file" />
                                <AddReactionRoundedIcon  style={{ color: "FFC600" }} /><span style={{ color: "orange" }}>Feeling/Activity</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
