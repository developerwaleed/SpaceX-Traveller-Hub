import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMissions } from './redux/Missions/missions';
import NavBar from './components/NavBar/Navbar';
import MyProfile from './components/NavBar/MyProfile';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import GoodBye from './components/NavBar/GoodBye';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<Rockets to="/Rocket" />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/goodbye" element={<GoodBye />} />
      </Routes>
    </>
  );
}

export default App;
