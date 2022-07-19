import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import MyProfile from './components/NavBar/MyProfile';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<Rockets to="/Rocket" />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/Mission" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
