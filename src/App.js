import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import MyProfile from './components/NavBar/MyProfile';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Welcome from './components/NavBar/Welcome';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<Welcome to="/Welcome" />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/Rocket" element={<Rockets />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
