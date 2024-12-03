import React, { useState, useEffect, useRef, useContext } from "react";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import ContactUs from "./components/ContactUs";
import FixedButtons from "./components/FixedButtons";
import HeroSection from "./components/HeroSection";
import AppContext from "./AppContext/AppContext";

const local_storagePrefences = localStorage.getItem("PrefrenceVal");

const Landing = () => {
  const appContext = useContext(AppContext);
  const [signinClicked, setSigninClicked] = useState(false);
  const [isLoggedIn, setISsLoggedIn] = useState(false);
  const [userSignUp, setUserSignUp] = useState(false);
  const [memberSignUp, setMemberSignUp] = useState(false);
  const navRef = useRef(null);

  const [userInfo, setUserInfo] = useState(
    local_storagePrefences != null
      ? JSON.parse(localStorage.getItem("PrefrenceVal")).userInfoVal
      : {
          firstName: "Sachin Rana",
          phoneNumber: null,
          email: "sachinrana2304@gmail.com",
          picture: "https://picsum.photos/400/400",
          username: null,
          accountType: null,
          userId: null,
          sessionId: null,
        }
  );

  const preferencesVal = {
    userInfoVal: userInfo,
    setUserInfo,
  };

  useEffect(() => {
    localStorage.setItem("PrefrenceVal", JSON.stringify(preferencesVal));
  }, [preferencesVal]);

  useEffect(() => {
    console.log("session id", preferencesVal.userInfoVal.sessionId);
  }, [signinClicked]);

  return (
    <AppContext.Provider value={preferencesVal}>
      <div className="relative">
        {signinClicked && (
          <LoginSignup
            navRef={navRef}
            setSigninClicked={setSigninClicked}
            setUserSignUp={setUserSignUp}
            userSignUp={userSignUp}
            signinClicked={signinClicked}
            memberSignUp={memberSignUp}
            setMemberSignUp={setMemberSignUp}
          />
        )}
        <Navbar
          navRef={navRef}
          signinClicked={signinClicked}
          setSigninClicked={setSigninClicked}
          isLoggedIn={isLoggedIn}
          setISsLoggedIn={setISsLoggedIn}
          userSignUp={userSignUp}
          setUserSignUp={setUserSignUp}
          memberSignUp={memberSignUp}
          setMemberSignUp={setMemberSignUp}
        />
        <HeroSection />

        {/* <Services/> */}
        {/* <AboutUs/> */}

        <ContactUs />
        <ContactUs />
        {/* <Footer/> */}
        <FixedButtons navRef={navRef} />
      </div>
    </AppContext.Provider>
  );
};

export default Landing;
