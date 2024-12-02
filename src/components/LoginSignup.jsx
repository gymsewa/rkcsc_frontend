import React, { useState, useRef, useEffect } from "react";
import "./LoginSignup.css";

const LoginSignup = ({ setSigninClicked, signinClicked }) => {
  const [isSignup, setIsSignup] = useState(false);
  const loginCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginCardRef.current &&
        !loginCardRef.current.contains(event.target)
      ) {
        setSigninClicked(false);
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
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email or Phone"
                    className="forms_field-input"
                    required
                    autoFocus
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
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
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
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
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
