import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./components/About";
import "./resets.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import C1 from "./challenge1/Cha1One";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/c1" element={<C1 />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
