import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Price from "./routes/Price";
import Preparing from "./routes/Preparing";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/preparing" element={<Preparing />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
