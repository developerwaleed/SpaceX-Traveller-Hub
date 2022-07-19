import "./App.css";
import { Route, Routes } from "react-router-dom";
import Example from "./components/NavBar/Navbar";
import MyProfile from "./components/MyProfile";
function App() {
  return (
    <>
    <Example />
    <Routes>
      <Route path="/myprofile" element={<MyProfile/>}/>
    </Routes>
    </>
    
  );
}

export default App;
