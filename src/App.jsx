import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contacts/Contacts";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
