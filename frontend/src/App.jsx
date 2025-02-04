import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import National from './pages/National'
import International from './pages/International'
import Science from './pages/Science'
import Business from './pages/Business'
import Education from './pages/Education'
import Health from './pages/Health'
import Entertainment from './pages/Entertainment'
import Sports from './pages/Sports'
import ContactUs from './pages/ContactUs'
import AboutUs from "./pages/Aboutus";
import CurrentIssue from "./pages/CurrentIssue";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Footer from './components/Footer'
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/national" element={<National />} />
        <Route path="/international" element={<International />} />
        <Route path="/science" element={<Science />} />
        <Route path="/business" element={<Business />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/currentissue" element={<CurrentIssue />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
