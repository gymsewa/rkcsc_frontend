import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import ContactUs from "./components/ContactUs";
const Landing = () => {
  const [signinClicked, setSigninClicked] = useState(false);

  useEffect(() => {
    console.log("login popup showing", signinClicked);
  }, [signinClicked]);

  return (
    <div className="relative">
      <Navbar
        signinClicked={signinClicked}
        setSigninClicked={setSigninClicked}
      />
      {signinClicked && (
        <LoginSignup
          setSigninClicked={setSigninClicked}
          signinClicked={signinClicked}
        />
      )}

      <ContactUs />
      <ContactUs />
      <ContactUs />
    </div>
  );
};

export default Landing;
