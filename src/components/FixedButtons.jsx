
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FixedButtons = ({navRef}) => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-0 w-[130px] justify-center items-center flex gap-2 z-30">
      {/* <button
        className="bg-green-500 btn-whatsapp-pulse hover:bg-green-600 hover:scale-105  text-white rounded-full shadow-lg transition-colors"
        aria-label="Contact us"
      >
        <a
          href="https://wa.me/+917860060094?text=Hello%20Solist%20Properties%20Team%2C%0ACould%20you%20please%20assist%20me%20in%20knowing%20more%20about%20the%20properties%20you%20offer%20in%20the%20Delhi%20region%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
      </button> */}

      {showScrollTopButton && (
        <button className="button" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default FixedButtons;
