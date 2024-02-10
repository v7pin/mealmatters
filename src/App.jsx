import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Registration from "./routes/Registration";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main-home" replace />} />
        <Route path="/main-home" element={<Home />} />
        <Route path="/get-involved" element={<Registration />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
