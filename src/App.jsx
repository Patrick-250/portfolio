import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <div className="main-content">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
