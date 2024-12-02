import React, { useEffect, useState } from "react";
import styles from "./Nav2.module.css";
import logo from "../assets/LogoRkcsc.png";

const Navbar = ({ setSigninClicked, signinClicked, navRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 938);
  const [isAnimating, setIsAnimating] = useState(false);

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
      <li>Home</li>
      <li>Services</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
  );

  const renderNavRight = () => (
    <div
      className={`${styles.navRight} ${
        isMenuOpen ? styles.mobileNavRight : ""
      }`}
      ref={navRef}
    >
      <li
        onClick={() => {
          setSigninClicked(!signinClicked);
        }}
      >
        Login
      </li>
      <button>Sign up</button>
    </div>
  );

  return (
    <>
      <div className={styles.Navbar}>
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
