import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dorms from "./pages/Dorms";
import DormDetails from "./pages/DormDetails";
import UserProfile from "./pages/UserProfile";
import NavBar from './components/navbar';
import About from './pages/About';
import UserRatings from "./pages/UserRatings";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dormdetails" element={<DormDetails />} />
        <Route path="Dorms" element={<Dorms />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="About" element={<About />} />
        <Route path="userratings" element={<UserRatings />} />
      </Routes>
    </div>
  );
}

export default App;
