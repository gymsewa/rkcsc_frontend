import React, { useState, useRef, useEffect } from "react";
import "./LoginSignup.css";
import Core from "../core/Core";

const LoginSignup = ({
  setSigninClicked,
  signinClicked,
  navRef,
  setUserSignUp,
  userSignUp,
  memberSignUp,
  setMemberSignUp,
}) => {
  const { loginEmailPass, signupEmailPass } = Core();

  const [isSignup, setIsSignup] = useState(userSignUp || false);
  const loginCardRef = useRef(null);
  const fNameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const signupPassInputRef = useRef(null);
  const userNameInputRef = useRef(null);
  const loginPassRef = useRef(null);
  const firmNameRef = useRef(null);
  const docsRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginCardRef.current &&
        !loginCardRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setSigninClicked(false);
        setUserSignUp(false);
        setMemberSignUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSigninClicked]);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setMemberSignUp(false);

    console.log("Login button clicked");

    const email = userNameInputRef.current?.value;
    const password = loginPassRef.current?.value;

    console.log("Email input:", email);
    console.log("Password input:", password ? "***" : "empty");

    if (email && password) {
      loginEmailPass(email, password, setSigninClicked);
    } else {
      console.error("Email or password is missing");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    console.log("Signup button clicked");

    const firstName = fNameInputRef.current?.value;
    const phoneNumber = phoneInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = signupPassInputRef.current?.value;
    const firmName = firmNameRef?.current?.value;
    const docs = docsRef?.current?.value;

    console.log("Signup inputs:", { firstName, phoneNumber, email });

    if (firstName && phoneNumber && email && password) {
      signupEmailPass(
        firstName,
        phoneNumber,
        email,
        password,
        firmName,
        docs,
        setSigninClicked
      );
    } else {
      console.error("Please fill in all signup fields");
    }
  };

  return (
    <section className="user">
      <div className="user_options-container" ref={loginCardRef}>
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">New to RK Consultancy?</h2>
            <p className="user_unregistered-text">
              Join our network of professional consultancy and digital service
              solutions. Create an account to access comprehensive CSC services,
              personalized consulting insights, and streamline your business
              operations with RK Consultancy.
            </p>
            <button
              className="user_unregistered-signup"
              onClick={handleSignupClick}
            >
              Sign up
            </button>
          </div>
          <div className="user_options-registered">
            <h2 className="user_registered-title">
              Welcome Back to RK Consultancy
            </h2>
            <p className="user_registered-text">
              Your trusted partner in business consulting and digital services
              awaits. Log in to manage your ongoing projects, access exclusive
              CSC services, and continue your journey of business transformation
              with RK Consultancy.
            </p>
            <button
              className="user_registered-login"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>

        <div
          className={`user_options-forms ${
            isSignup ? "bounceLeft" : "bounceRight"
          }`}
        >
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form className="forms_form" onSubmit={handleLogin}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    ref={userNameInputRef}
                    type="email"
                    placeholder="Email or Phone"
                    className="forms_field-input"
                    required
                    autoFocus
                  />
                </div>
                <div className="forms_field">
                  <input
                    ref={loginPassRef}
                    type="text"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button>
                <input
                  type="submit"
                  value="Log In"
                  className="forms_buttons-action"
                />
              </div>
            </form>
          </div>
          {memberSignUp ? (
            <div className="user_forms-signup">
              <h2 className="forms_title">Partner Sign Up</h2>
              <form className="forms_form" onSubmit={handleSignUp}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      ref={fNameInputRef}
                      type="text"
                      placeholder="Full Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      placeholder="Phone"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={emailInputRef}
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={signupPassInputRef}
                      type="text"
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={firmNameRef}
                      type="text"
                      placeholder="Firm Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={docsRef}
                      type="file"
                      placeholder="Full Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Sign up"
                    className="forms_buttons-action"
                    onClick={handleSignUp}
                  />
                </div>
              </form>
            </div>
          ) : (
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form" onSubmit={handleSignUp}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      ref={fNameInputRef}
                      type="text"
                      placeholder="Full Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      placeholder="Phone"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={emailInputRef}
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      ref={signupPassInputRef}
                      type="text"
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Sign up"
                    className="forms_buttons-action"
                    onClick={handleSignUp}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
