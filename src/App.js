
import './App.css';
import Coaching from './pages/Coaching';
import Home from './pages/Home';
import Massage from './pages/Massage';
import Yoga from './pages/Yoga';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Massage" element={<Massage page={"massage"} />}></Route>
          <Route path="/Yoga" element={<Yoga page={"yoga"} />}></Route>
          <Route path="/Coaching" element={<Coaching page={"coaching"} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
