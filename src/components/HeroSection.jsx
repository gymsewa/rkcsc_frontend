import React from "react";
import bgImage from "../assets/bgImagRK.webp";
import { Link } from "react-router-dom";

const HeroSection = ({}) => {
  return (
    <>
      <div
        className="md:min-h-[92vh] min-h-[80vh] bg-white bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="md:min-h-[92vh] min-h-[80vh] flex justify-center items-center bg-white/40">
          <div className="container flex justify-center items-center mx-auto px-[4%] py-12 md:py-24">
            <div className=" md:w-[65%] w-full gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-[#000080] text-center tracking-wide text-4xl uppercase md:text-4xl lg:text-6xl font-bold leading-tight font-roboto">
                  WELCOME TO Rk Consultancy And CSC Services
                </h1>
                <p className="text-black text-center font-medium text-xl md:text-xl leading-relaxed">
                  We excel at ensuring flawless completion of all type of
                  Documents, Certificates & various other online applications,
                  guaranteeing a 100% accuracy everytime.
                </p>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-4 pt-4">
                  <button className="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-2 py-1 font-medium text-black-600">
                    <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-blue-800 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative group-hover:text-white text-lg">
                      Why Choose Us ?
                    </span>
                  </button>
                  <button className="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-2 py-1 font-medium text-black-600">
                    <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-blue-800 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <Link to="/services" className="relative group-hover:text-white text-lg">
                      Explore Our Services
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
