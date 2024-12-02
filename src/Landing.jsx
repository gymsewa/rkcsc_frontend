import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import ContactUs from "./components/ContactUs";
import FixedButtons from "./components/FixedButtons";
import HomeSection from "./components/HomeSection";

const Landing = () => {
  const [signinClicked, setSigninClicked] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    console.log("login popup showing", signinClicked);
  }, [signinClicked]);

  return (
    <div className="relative">
      <Navbar
        
        signinClicked={signinClicked}
        setSigninClicked={setSigninClicked}
      />
      <HomeSection navRef={navRef}/>
      {signinClicked && (
        <LoginSignup
          setSigninClicked={setSigninClicked}
          signinClicked={signinClicked}
        />
      )}

      <ContactUs />
      <ContactUs />
      <ContactUs />
      <FixedButtons navRef={navRef} />
    </div>
  );
};

export default Landing;
