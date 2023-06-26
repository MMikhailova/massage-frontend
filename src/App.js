
import './App.css';
import Coaching from './pages/Coaching';
import Home from './pages/Home';
import Massage from './pages/Massage';
import Yoga from './pages/Yoga';



function App() {
 

  return (
    <div className="App">
      <Home />
      <Massage page={"massage"} />
      <Yoga page={"yoga"} />
      <Coaching page={"coaching"} />
    </div>
  );
}

export default App;
