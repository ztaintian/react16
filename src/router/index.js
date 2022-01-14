import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../views/Login/index.js";
import Home from "../views/Home/index.js";
const Routers = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/home" element={<Home />} />
  </Routes>
);
export default Routers;
