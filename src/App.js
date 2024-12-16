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
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";
import UpdateProfile from "./components/UpdateProfile";
import ProductDetail from "./components/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllServices from "./components/AllServices";
import Dashboard from "./componentsAdmin/Dashboard";

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
          firmName: null,
          orders: [],
          walletHistory: [],
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
    <>
      <AppContext.Provider value={preferencesVal}>
        <Router>
          {/* <div className="App"> */}
            <Routes>
              <Route path="/admin" element={<Dashboard />} />

              <Route
                path="*"
                element={
                  <>
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
                      <Route path="/services" element={<AllServices />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/profile" element={<ProfileSection />} />
                      <Route
                        path="/updateProfile"
                        element={<UpdateProfile />}
                      />
                      <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                    <Footer />
                  </>
                }
              />
            </Routes>
          {/* </div> */}
        </Router>
      </AppContext.Provider>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;