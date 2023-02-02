import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Timeline />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
