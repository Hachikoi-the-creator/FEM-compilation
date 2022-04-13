import React from "react";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <NavLink to={"/"}>Index</NavLink>
      <NavLink to={"/c1"}>GEY</NavLink>
    </div>
  );
}
