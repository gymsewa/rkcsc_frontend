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
} from "react-router-dom";

import ProfileSection from "./components/ProfileSection";

const local_storagePrefences = localStorage.getItem("PrefrenceVal");

function App() {
  // const appContext = useContext(AppContext);
  const [signinClicked, setSigninClicked] = useState(false);
  const [isLoggedIn, setISsLoggedIn] = useState(false);
  const [userSignUp, setUserSignUp] = useState(false);
  const [memberSignUp, setMemberSignUp] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

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

  return (
    <AppContext.Provider value={preferencesVal}>
      <Router>
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
              />
            }
          />
          <Route path="/profile" element={<ProfileSection />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
