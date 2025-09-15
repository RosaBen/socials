// import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Register from './pages/Register'

export default function AppRouter() {
  // const books = ['Book 1', 'Book 2', 'Book 3'];

  return (
    <Router>
      {/* <Navbar books={books} /> */}
      <Routes>
        {/* <Route path="/" element={<h1>Welcome to the Bookstore</h1>} />
        <Route path="/book" element={<Book />} /> */}
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}