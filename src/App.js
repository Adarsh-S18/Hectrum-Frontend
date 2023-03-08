// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import AdminDashboard from "./AdminPages/AdminDashboard/AdminDashboard";
import AdminLogin from "./AdminPages/AdminLogin/AdminLogin";
import AllPosts from "./AdminPages/AllPosts/AllPosts";
import AllUsers from "./AdminPages/AllUsers/AllUsers";
import Reports from "./AdminPages/Reports/Reports";
import AdminSidebar from "./Components/AdminSidebar/AdminSidebar";
import EditProfile from "./Components/EditProfile/EditProfile";
import Leftbar from "./Components/Leftbar/Leftbar";
import Navbar from "./Components/Navbar/Navbar";
import Notifications from "./Components/Notifications/Notifications";
import Rightbar from "./Components/Rightbar/Rightbar";
import { AuthContext } from "./Context/authContext";
import { DarkmodeContext } from "./Context/DarkmodeContext";
import Friends from "./Pages/Friends/Friends";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Message from "./Pages/Messages/Message";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import './Style.scss'


function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkmodeContext)
  console.log(darkMode)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const AdminLayout = () => {
    return (
      <div style={{ display: 'flex' }}>
        <AdminSidebar />
        <div style={{ flex: 8 }} >
          <Outlet />
        </div>
      </div>
    )
  }

  const MessageLayout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 9}}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <AdminLayout />,
      children: [
        {
          path: '/dashboard',
          element: <AdminDashboard />
        },
        {
          path: '/dashboard/allusers',
          element: <AllUsers />
        },
        {
          path: '/dashboard/allposts',
          element: <AllPosts />
        },
        {
          path: '/dashboard/reports',
          element: <Reports />
        },
      ]
    },
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },{
            path:'/friends',
            element:<Friends />
        } ,
        {
            path:'/notifications',
            element:<Notifications />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }, {
          path: '/editprofile/:id',
          element: <EditProfile />
        },
      ]
    },
    {
      path: '/messages',
      element: <ProtectedRoute><MessageLayout /></ProtectedRoute>,
      children: [
        {
          path: '/messages',
          element: <Message />,
          children: [ 
          ]
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    }, {
      path: '/messages/:id',
      element: <Message />
    },
    {
      path: '/signup',
      element: <Register />
    },
    {
      path: '/adminlogin',
      element: <AdminLogin />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
