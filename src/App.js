/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";

const Layout = ({ Component, showFooter = true }) => {
  return (
    <>
      <Navbar />
      <Component />
      {Footer && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/home'
        element={<Layout Component={Home} showFooter={false} />}
      />
      <Route path='/about' element={<Layout Component={About} />} />
    </Routes>
  );
};

export default App;
