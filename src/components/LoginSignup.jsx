import React, { useState, useRef, useEffect } from "react";
import "./LoginSignup.css";
import Core from "../core/Core";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";

const LoginSignup = ({
  setSigninClicked,
  signinClicked,
  navRef,
  setUserSignUp,
  userSignUp,
  memberSignUp,
  setMemberSignUp,
  setIsSignup,
  isSignup,
  setShowGlobalLoader,
  setShowNotification,
  setFailedNoti,
}) => {
  const { loginEmailPass, signupEmailPass } = Core();

  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [emailError, setEmailError] = useState(false);

  const loginCardRef = useRef(null);
  const fNameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const signupPassInputRef = useRef(null);
  const userNameInputRef = useRef(null);
  const loginPassRef = useRef(null);
  const firmNameRef = useRef(null);
  const docsRef = useRef(null);

  // useEffect(() => {
  //   if (memberSignUp) {
  //     setIsSignup(true);
  //   }
  // }, [memberSignUp]);

  // useEffect(()=> {
  //   if(userSignUp) {
  //     setIsSignup(true);
  //   }
  // },[userSignUp])

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

  const validateEmailOrPhone = (value) => {
    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone number regex pattern (supports various formats)
    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    return emailPattern.test(value) || phonePattern.test(value);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setMemberSignUp(false);

    const emailOrPhone = userNameInputRef.current?.value;
    const password = loginPassRef.current?.value;

    // Validate email or phone
    if (!validateEmailOrPhone(emailOrPhone)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);

    if (emailOrPhone && password) {
      loginEmailPass(
        emailOrPhone,
        password,
        setSigninClicked,
        setShowGlobalLoader,
        setShowNotification,
        setFailedNoti
      );
    } else {
      console.error("Email or password is missing");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    if (memberSignUp && !docsRef.current?.value) {
      console.error("Please upload a document");
      return;
    }

    console.log("Signup button clicked");

    const firstName = fNameInputRef.current?.value;
    const phoneNumber = phoneInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = signupPassInputRef.current?.value;
    const firmName = firmNameRef?.current?.value;

    const docs = docsRef?.current?.files?.[0];

    console.log("Signup inputs:", { firstName, phoneNumber, email });

    if (firstName && phoneNumber && email && password) {
      signupEmailPass(
        firstName,
        phoneNumber,
        email,
        password,
        firmName,
        docs,
        setSigninClicked,
        setShowGlobalLoader
      );
    } else {
      console.error("Please fill in all signup fields");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
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
          {memberSignUp ? (
            <div className="user_options-registered">
              <h2 className="user_registered-title">
                Join the RK Consultancy Partner Program
              </h2>
              <p className="user_registered-text">
                Unlock new opportunities with RK Consultancy for just ₹49.
                Become a partner to enjoy discounted services, priority support,
                and preferential pricing over individual users. Sign up now and
                start your journey toward a successful partnership.
              </p>
            </div>
          ) : (
            <div className="user_options-registered">
              <h2 className="user_registered-title">
                Welcome Back to RK Consultancy
              </h2>
              <p className="user_registered-text">
                Your trusted partner in business consulting and digital services
                awaits. Log in to manage your ongoing projects, access exclusive
                CSC services, and continue your journey of business
                transformation with RK Consultancy.
              </p>
              <button
                className="user_registered-login"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          )}
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
                    placeholder="Email or Phone"
                    className={`forms_field-input ${
                      emailError ? "border-red-500" : ""
                    }`}
                    required
                    autoFocus
                    onChange={() => setEmailError(false)}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email or phone number
                    </p>
                  )}
                </div>
                <div className="forms_field relative">
                  <input
                    ref={loginPassRef}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                  <span
                    className="absolute right-[1%] top-[24%] z-50"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                    ) : (
                      <AiOutlineEye className="text-xl cursor-pointer" />
                    )}
                  </span>
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
            <div className="user_forms-signup !top-[20px]">
              <h2 className="member-forms_title">Partner Sign Up</h2>
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
                      ref={firmNameRef}
                      type="text"
                      placeholder="Firm Name"
                      className="forms_field-input"
                      required
                    />
                  </div>
                  <div className="forms_field relative">
                    <input
                      ref={signupPassInputRef}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                    <span
                      className="absolute right-[1%] top-[24%] z-50"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                      ) : (
                        <AiOutlineEye className="text-xl cursor-pointer" />
                      )}
                    </span>
                  </div>

                  <div className="forms_field">
                    <input
                      ref={docsRef}
                      type="file"
                      id="file-upload"
                      className="forms_field-input"
                      // required
                      onChange={handleFileChange}
                    />
                    <label for="file-upload" className="custom-file-upload">
                      <span className="cssbuttons-io-button">
                        <svg
                          viewBox="0 0 640 512"
                          fill="white"
                          height="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                        </svg>
                        <span>{fileName || "Upload Document"}</span>
                      </span>
                    </label>
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
                  <div className="forms_field relative">
                    <input
                      ref={signupPassInputRef}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="forms_field-input"
                      required
                    />
                    <span
                      className="absolute right-[1%] top-[24%] z-50"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                      ) : (
                        <AiOutlineEye className="text-xl cursor-pointer" />
                      )}
                    </span>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
