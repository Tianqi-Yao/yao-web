import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Netflix from './components/NetflixComponent/Netflix'
import HomePage from './components/HomePageComponent/HomePage';
import WebRobot from './components/WebRobotComponent/WebRobot';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/robot' element={<WebRobot />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
