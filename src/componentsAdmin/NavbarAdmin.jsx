import React, { useContext, useEffect, useState } from "react";
// import styles from "./Nav2.module.css";
import styles from "../components/Nav2.module.css";
import logo from "../assets/LogoRkcsc.png";
import AppContext from "../AppContext/AppContext";
import profile from "../assets/userProfile.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavbarAdmin = ({ navRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
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

  //   useEffect(() => {
  //     if (appContext.userInfoVal.sessionId !== null) {
  //       setISsLoggedIn(true);
  //     }else {
  //       setISsLoggedIn(false);
  //     }
  //   }, [appContext.userInfoVal.sessionId]);

  const toggleMenu = () => {
    if (isAnimating) return;

    if (isMenuOpen) {
      setIsAnimating(true);
      setIsMenuOpen(false);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } else {
      setIsAnimating(true);
      setIsMenuOpen(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  //   const handleProfileNavigation = () => {
  //     if (location.pathname === "/profile") {
  //       navigate("/");
  //     } else {
  //       navigate("/profile");
  //     }
  //   };

  const isActiveRoute = (path) => {
    return location.pathname.includes(path);
  };


  const renderNavItems = () => (
    <ul
      className={`${styles.navList} ${isMenuOpen ? styles.mobileNavList : ""}`}
    >
      <li className={isActiveRoute('/adminRk') && location.pathname === '/adminRk' ? styles.activeNavItem : ''}>
        <Link to="/adminRk">Dashboard</Link>
      </li>
      <li className={isActiveRoute('/adminRk/products') ? styles.activeNavItem : ''}>
        <Link to="/adminRk/products">Products</Link>
      </li>
      <li className={isActiveRoute('/adminRk/orders') ? styles.activeNavItem : ''}>
        <Link to="/adminRk/orders">Orders</Link>
      </li>
      <li className={isActiveRoute('/adminRk/users') ? styles.activeNavItem : ''}>
        <Link to="/adminRk/users">Users</Link>
      </li>
    </ul>
  );

  //   const SignupDropdown = () => (
  //     <div
  //       className={`${styles.signupDropdown} ${
  //         isSignupDropdownOpen ? styles.open : ""
  //       }`}
  //     >
  //       <span className="flex justify-center items-center">
  //         <span>Sign Up</span>
  //         <TiArrowSortedDown />
  //       </span>
  //       {isSignupDropdownOpen && (
  //         <div className={styles.dropdownContent}>
  //           <div
  //             className={styles.dropdownItem}
  //             onClick={() => {
  //               console.log("User Signup");
  //               setUserSignUp(true);
  //               setIsSignup(true);
  //               setMemberSignUp(false);
  //               setSigninClicked(true);
  //               setIsSignupDropdownOpen(false);
  //             }}
  //           >
  //             User Signup
  //           </div>
  //           <div
  //             className={styles.dropdownItem}
  //             onClick={() => {
  //               console.log("Member Signup");
  //               setMemberSignUp(true);
  //               setSigninClicked(true);
  //               setUserSignUp(true);
  //               setIsSignup(true);
  //               setIsSignupDropdownOpen(false);
  //             }}
  //           >
  //             Partner Signup
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );

  //   const renderNavRight = () => (
  //     <div
  //       className={`${styles.navRight} ${
  //         isMenuOpen ? styles.mobileNavRight : ""
  //       }`}
  //     >
  //       <li
  //         className="select-none"
  //         //   onClick={handleProfileNavigation}
  //       >
  //         {/* {`Hi ${appContext.userInfoVal.firstName.trim().split(" ")[0]}`} */}
  //         Hii Admin
  //       </li>
  //       <img
  //         src={profile}
  //         alt="profile"
  //         className="h-10 w-10 cursor-pointer"
  //         onClick={handleProfileNavigation}
  //       />
  //     </div>
  //   );


  return (
    <>
      <div className={styles.Navbar}>
        <Link to="/admin" className="flex justify-center items-center">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

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
                  <li>Dashboard</li>
                  <li>Product</li>
                  <li>Orders</li>
                  <li>Users</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>{renderNavItems()}</>
        )}
      </div>
    </>
  );
};

export default NavbarAdmin;
