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
  const [showGlobalLoader, setShowGlobalLoader] = useState(false);

  return (
    <div className="relative">
      {showGlobalLoader && <Loader />}
      {signinClicked && (
        <LoginSignup
          navRef={navRef}
          setSigninClicked={setSigninClicked}
          setUserSignUp={setUserSignUp}
          userSignUp={userSignUp}
          signinClicked={signinClicked}
          memberSignUp={memberSignUp}
          setMemberSignUp={setMemberSignUp}
          setIsSignup={setIsSignup}
          isSignup={isSignup}
          setShowGlobalLoader={setShowGlobalLoader}
          setShowNotification = {setShowNotification}
          setFailedNoti = {setFailedNoti}
        />
      )}
      <HeroSection />
      <Cards />
      <About />
      <ContactUs />
      <FixedButtons navRef={navRef} />
    </div>
  );
};

export default Landing;
