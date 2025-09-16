// import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile'

export default function AppRouter() {

  return (
    <Router>
      <header>
      <Navbar/>
      </header>
      <main>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </main>
      <footer>
        
      </footer>
    </Router>
  );
}