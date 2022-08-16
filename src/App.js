/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AnimatedNavbar from "./Components/Navbar/AnimatedNavbar";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/About/About";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Lokas from "./pages/CTAs/Lokas";
import Network from "./pages/CTAs/Network";
import Story from "./pages/CTAs/Story";
import World from "./pages/CTAs/World";
import Docs from "./pages/Docs/Docs";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Team from "./pages/Team/Team";

const Wrapper = ({ Component, navbarImage = true, animatedNavbar = false }) => {
  return (
    <>
      <Component />
      <Footer />
      {!animatedNavbar && <Navbar imageShow={navbarImage} />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/faq' element={<Wrapper Component={FAQ} />} />
        <Route path='/team' element={<Wrapper Component={Team} />} />
        <Route path='/story' element={<Wrapper Component={Story} />} />
        <Route
          path='/home'
          element={
            <Wrapper
              animatedNavbar={true}
              Component={Home}
              navbarImage={false}
            />
          }
        />
        <Route path='/about' element={<Wrapper Component={About} />} />
        <Route
          path='/coming-soon'
          element={<Wrapper Component={ComingSoon} />}
        />
        <Route path='/network' element={<Wrapper Component={Network} />} />
        <Route path='/docs' element={<Wrapper Component={Docs} />} />
        <Route path='/world' element={<Wrapper Component={World} />} />
        <Route path='/lokas' element={<Wrapper Component={Lokas} />} />
        <Route
          path='*'
          element={<Wrapper Component={Home} navbarImage={false} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
