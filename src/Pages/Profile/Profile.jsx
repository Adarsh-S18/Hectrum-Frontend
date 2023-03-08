
import "./Profile.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../Components/Posts/Posts";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
const Profile = () => {

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://pbs.twimg.com/media/E10Z9JeVIAIaHkt.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://github.com/Adarsh-S18">
              <GitHubIcon fontSize="small" />
            </a>
            <a href="https://www.instagram.com/__ideal.lad__/">
              <InstagramIcon fontSize="small" />
            </a>

            <a href="https://www.linkedin.com/in/adarsh-s-244991214/">
              <LinkedInIcon fontSize="small" />
            </a>

          </div>
          <div className="center">
            <span>Adarsh</span>
            <div className="info">
              <div className="item">
                <h4>8</h4><span>Posts</span>
              </div>
              <div className="item">
                <h4>59</h4><span> Followers</span>
              </div>
              <div className="item">
                <h4>43</h4><span>Following</span>
              </div>
            </div>
            <Link to='/editprofile/:id'>
            <button>Edit Profile</button>
            </Link>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;