import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
// import HeaderL from './Components/HeaderL';
import Footer from './Components/Footer';
import Home from './Components/LandingPage';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import Schedule from './Components/Schedule';
import Services from './Components/Services';
import MyProfile from './Components/MyProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/services" element={<Services />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
