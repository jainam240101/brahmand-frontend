/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

const Layout = (Component) => {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={Layout(Home)} />
    </Routes>
  );
};

export default App;
