
import './App.css';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Massage from './pages/Massage';
import Yoga from './pages/Yoga';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Massage" element={<Massage page={"massage"} />} />
          <Route path="/Yoga" element={<Yoga page={"yoga"} />} />
          <Route path="/Coaching" element={<Coaching page={"coaching"} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
