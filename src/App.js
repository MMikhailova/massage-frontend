
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Treatments from './components/Treatments';


function App() {
  const [page, setPage] = useState("Home")

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPage={setPage} />}></Route>
        <Route
          path="/Massage"
          element={<Treatments page="massage" setPage={setPage} />}
        ></Route>
        <Route
          path="/Yoga"
          element={<Treatments page="yoga" setPage={setPage} />}
        ></Route>
        <Route
          path="/Coaching"
          element={<Treatments page="health coaching" setPage={setPage} />}
        ></Route>
        <Route path="/About" element={<Home setPage={setPage} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
