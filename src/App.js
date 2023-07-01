

import './App.css';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Massage from './pages/Massage';
import Yoga from './pages/Yoga';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooking } from './api/viewModels/getBooking';

function App() {
   const [booking, setBooking] = useState([]);
  

   useEffect(() => {
     getBooking(
       "https://strapi-production-7702.up.railway.app/api/bookings"
     ).then((vm) => {
       setBooking(vm);
     });
   }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home booking={booking} />} />
          <Route
            path="/Massage"
            element={<Massage page={"massage"} url={booking.massage} />}
          />
          <Route
            path="/Yoga"
            element={<Yoga page={"yoga"} url={booking.yoga} />}
          />
          <Route
            path="/Coaching"
            element={<Coaching page={"coaching"} url={booking.coaching} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
