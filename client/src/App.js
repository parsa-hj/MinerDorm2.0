import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dorms from "./pages/Dorms";
import DormDetails from "./pages/DormDetails";
import UserProfile from "./pages/UserProfile";
import NavBar from './components/navbar';
import About from './pages/About';
import UserRatings from "./pages/UserRatings";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingNav from './components/LandingNav';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase-config';
import PrivateRoute from './components/PrivateRoutes';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <NavBar /> : <LandingNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dormdetails" element={<DormDetails />} />
        <Route path="Dorms" element={<Dorms />} />
        <Route path="About" element={<About />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />

        <Route path="userprofile" element={<UserProfile />} />
        <Route path="userratings" element={<UserRatings />} />
      </Routes>
    </div>
  );
}

export default App;
