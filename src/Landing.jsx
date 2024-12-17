import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import ContactUs from "./components/ContactUs";
import FixedButtons from "./components/FixedButtons";
import HeroSection from "./components/HeroSection";
import AppContext from "./AppContext/AppContext";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import About from "./components/About";
import Loader from "./components/Loader";

const Landing = ({
  navRef,
  signinClicked,
  setSigninClicked,
  isLoggedIn,
  setISsLoggedIn,
  userSignUp,
  memberSignUp,
  setUserSignUp,
  setMemberSignUp,
  setIsSignup,
  isSignup,
  setFailedNoti,
  setShowNotification,
}) => {


  return (
    <div className="relative">
      
      <HeroSection />
      <Cards />
      <About />
      <ContactUs />
      <FixedButtons navRef={navRef} />
    </div>
  );
};

export default Landing;
