import { Link } from "react-router"
export default function Navbar(){
  return(
    <nav>
      <div>
        <h1><span className="brand-icon">🌐</span>My Social Network</h1>
      </div>
      <div className="links-container">
        <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}