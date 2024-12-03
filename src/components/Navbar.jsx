import React, { useContext, useEffect, useState } from "react";
import styles from "./Nav2.module.css";
import logo from "../assets/LogoRkcsc.png";
import AppContext from "../AppContext/AppContext";
import profile from "../assets/userProfile.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = ({
  setSigninClicked,
  signinClicked,
  isLoggedIn,
  setISsLoggedIn,
  setUserSignUp,
  navRef,
  memberSignUp,
  setMemberSignUp,
  userSignUp,
}) => {
  const appContext = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 938);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementsByClassName(styles.Navbar)[0];
      if (window.scrollY > 50) {
        navbar.classList.add(styles.scrolled);
      } else {
        navbar.classList.remove(styles.scrolled);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 938);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (appContext.userInfoVal.sessionId !== null) {
      setISsLoggedIn(true);
    }
  }, [appContext.userInfoVal.sessionId]);

  const toggleMenu = () => {
    if (isAnimating) return;

    if (isMenuOpen) {
      setIsAnimating(true);
      setIsMenuOpen(false);

      // Remove animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Should match the animation duration
    } else {
      setIsAnimating(true);
      setIsMenuOpen(true);

      // Remove animation state after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const renderNavItems = () => (
    <ul
      className={`${styles.navList} ${isMenuOpen ? styles.mobileNavList : ""}`}
    >
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </ul>
  );

  const SignupDropdown = () => (
    <div
      className={`${styles.signupDropdown} ${
        isSignupDropdownOpen ? styles.open : ""
      }`}
    >
      <span className="flex justify-center items-center">
        <span>Sign Up</span>
        <TiArrowSortedDown />
      </span>
      {isSignupDropdownOpen && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdownItem}
            onClick={() => {
              console.log("User Signup");
              setUserSignUp(true);
              setMemberSignUp(false);
              setSigninClicked(true);
              setIsSignupDropdownOpen(false);
            }}
          >
            User Signup
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => {
              console.log("Member Signup");
              setMemberSignUp(true);
              setSigninClicked(true);
              setIsSignupDropdownOpen(false);
            }}
          >
            Partner Signup
          </div>
        </div>
      )}
    </div>
  );

  const renderNavRight = () => (
    <div
      className={`${styles.navRight} ${
        isMenuOpen ? styles.mobileNavRight : ""
      }`}
    >
      {isLoggedIn ? (
        <>
          <li
            onClick={() => {
              // setSigninClicked(!signinClicked);
            }}
          >
            Hii User
          </li>
          <img src={profile} alt="profile" className="h-10 w-10" />
        </>
      ) : (
        <>
          <li
            onClick={() => {
              setSigninClicked(!signinClicked);
            }}
          >
            Login
          </li>
          <button
            onMouseEnter={() => setIsSignupDropdownOpen(true)}
            onMouseLeave={() => setIsSignupDropdownOpen(false)}
            className="relative"
          >
            <SignupDropdown />
          </button>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className={styles.Navbar} ref={navRef}>
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className={styles.logo} />
          {!isMobile && <span>Rk Consultancy And CSC Services</span>}
        </div>

        {isMobile ? (
          <>
            <div className={styles.navRight}>
              <div className={styles.mobileLoginBtn}>Login</div>
              <div
                className={`${styles.hamburger} ${
                  isMenuOpen ? styles.open : ""
                }`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {isMenuOpen && (
              <div className={styles.mobileMenu}>
                <ul className={` ${isMenuOpen ? styles.mobileNavList : ""}`}>
                  <li>Home</li>
                  <li>Services</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            {renderNavItems()}
            {renderNavRight()}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
