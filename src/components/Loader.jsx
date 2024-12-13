import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-screen w-screen  z-[999] absolute flex justify-center items-center top-0 left-0">
      <div className="h-screen w-screen absolute top-0 left-0 bg-white/75 opacity-20"></div>
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
