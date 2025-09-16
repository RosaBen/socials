import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar(){
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/profile');
  }

  return(
    <nav>
      <div>
        <h1><span className="brand-icon">🌐</span>My Social Network</h1>
      </div>
      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <button 
        onClick={handleLogout}
        className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}