import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Registration from './components/Registration';
import DarkMode from './components/DarkMode';
import DarkMode2 from './components/DarkMode2';
import DMtoggle from './components/DMtoggle';
import FishSales from './components/FishSales';
import GoogleAuth from './components/GoogleAuth';
import GoogleLogIn2 from './components/GoogleLogIn2';
import FacebookAuth1 from './components/FacebookAuth1';
import Registration_be from './components/Registration_be';
import Auth from './pages/Auth';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import LandingAuth from './pages/LandingAuth';
import RegPage from './pages/RegPage';
import RegConf from './pages/RegConf';
import RegForm from './pages/RegForm';
import MainLogin from './pages/MainLogin';
// needs to import the element pages



function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Registration_be /> */}
      {/* <GoogleAuth /> */}
      {/* <GoogleLogIn2 /> */}
      {/* <FacebookAuth1 /> */}
      {/* <Sidebar /> */}
      {/* <Registration /> */}
      {/* <DarkMode /> */}
      {/* <DarkMode2 /> */}
      {/* <DMtoggle /> */}
      {/* <FishSales /> */}
      {/* <Auth /> */}
      
      <Router>

        <Routes>
            <Route path="/start" element={<LandingAuth />} />
            <Route path="/registration" element={<RegPage />} />
            <Route path="/registrationconf" element={<RegConf />} />
            <Route path="/regform" element={<RegForm />} />
            <Route path="/login" element={<MainLogin />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/profile/:username" element={<Profile />} /> */}
            <Route path="*" element={<ErrorPage />} />


          </Routes>

      </Router>

      {/* <Router>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />


        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
