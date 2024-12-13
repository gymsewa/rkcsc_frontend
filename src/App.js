import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Landing from "./Landing";
import AppContext from "./AppContext/AppContext";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useAsyncError,
} from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
import ContactUs from "./components/ContactUs";
import Notification from "./components/Notification";

import ProfileSection from "./components/ProfileSection";

const local_storagePrefences = localStorage.getItem("PrefrenceVal");

function App() {
  // const appContext = useContext(AppContext);
  const [signinClicked, setSigninClicked] = useState(false);
  const [isLoggedIn, setISsLoggedIn] = useState(false);
  const [userSignUp, setUserSignUp] = useState(false);
  const [memberSignUp, setMemberSignUp] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [failedNoti, setFailedNoti] = useState(false);

  const navRef = useRef(null);

  const [userInfo, setUserInfo] = useState(
    local_storagePrefences != null
      ? JSON.parse(localStorage.getItem("PrefrenceVal")).userInfoVal
      : {
          firstName: "rkcsc",
          phoneNumber: null,
          email: "noreply@rkcsc.in",
          picture: "https://picsum.photos/400/400",
          username: null,
          accountType: null,
          wallet: null,
          orders: [],
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

  return (
    <AppContext.Provider value={preferencesVal}>
      <Router>
        {showNotification && <Notification notification="LogIn Successful" />}
        {failedNoti && <Notification notification="LogIn Failed" />}
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
          setIsSignup={setIsSignup}
          isSignup={isSignup}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                navRef={navRef}
                signinClicked={signinClicked}
                setSigninClicked={setSigninClicked}
                isLoggedIn={isLoggedIn}
                setISsLoggedIn={setISsLoggedIn}
                userSignUp={userSignUp}
                setUserSignUp={setUserSignUp}
                memberSignUp={memberSignUp}
                setMemberSignUp={setMemberSignUp}
                setIsSignup={setIsSignup}
                isSignup={isSignup}
                setShowNotification={setShowNotification}
                setFailedNoti={setFailedNoti}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Cards />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<ProfileSection />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
