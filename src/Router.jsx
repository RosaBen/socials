// import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register'
import Home from './pages/Home'

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
      </Routes>
      </main>
      <footer>
        
      </footer>
    </Router>
  );
}