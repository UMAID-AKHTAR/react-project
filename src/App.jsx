import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routing/Home_.jsx";
import About from "./Routing/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
