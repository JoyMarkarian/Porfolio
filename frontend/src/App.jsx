import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import OneProject from "./pages/OneProject";
import ContactForm from "./pages/ContactForm";
import Admin from "./pages/Admin";
import NewProject from "./pages/NewProject";
import UpdateProject from "./pages/UpdateProject";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Timeline />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<OneProject />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/projects/add" element={<NewProject />} />
        <Route path="/admin/projects/:id/update" element={<UpdateProject />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;
