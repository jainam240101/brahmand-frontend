/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";

const Layout = ({ Component, showFooter = true }) => {
  return (
    <>
      <Navbar />
      <Component />
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/home'
        element={
          <Layout Component={Home} showFooter={false} />
        }
      />
      <Route path='/about' element={<Layout Component={About} />} />
      <Route path='/faq' element={<Layout Component={FAQ} />} />
    </Routes>
  );
};

export default App;
