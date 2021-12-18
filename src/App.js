import React from "react";
import Navbar from "./component/include/Navbar";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Service1 from "./component/pages/Service1";
import Footer from "./component/include/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servic-one" element={<Service1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
