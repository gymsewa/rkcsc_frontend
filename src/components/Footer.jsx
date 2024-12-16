import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoRkcsc.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 mt-10  text-gray-900">
      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b-2 border-[#2b2b2b]">
        <div className="flex items-center lg:justify-center gap-4">
          <FaMapMarkerAlt className="text-[rgb(0,64,255)] text-2xl mt-1" />
          <div>
            <h3 className="text-black text-xl mb-2">Find us</h3>
            <p>Pantnagar Railway Station , U.S Nagar, Uttarakhand, India</p>
          </div>
        </div>

        <div className="flex items-start lg:justify-center gap-4">
          <FaPhone className="text-[rgb(0,64,255)] text-2xl mt-1" />
          <div>
            <h3 className="text-black text-xl mb-2">Call us</h3>
            <p>Mobile (Whatsapp Only) 8445522551</p>
          </div>
        </div>

        <div className="flex items-start lg:justify-center gap-4">
          <FaEnvelope className="text-[rgb(0,64,255)] text-2xl mt-1" />
          <div>
            <h3 className="text-black text-xl mb-2">Mail us</h3>
            <p>rkconsultancy.csc@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="rkCSClogo" className="w-11 h-11"/>
            <span className="text-base">Rk Consultancy And CSC Services</span>
          </div>
          <p className="text-sm">
          <h6 className="font-bold text-base">Rk Consultancy And CSC Services</h6>
          <p>We provide all types of Government, Semi-Government and Private Company Online Services with minimum cost</p>
          </p>
          <h3 className="text-black text-xl mt-8 mb-4">Follow us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#3b5998] p-2 rounded-full hover:opacity-80"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="bg-[#1da1f2] p-2 rounded-full hover:opacity-80"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="bg-[#db4437] p-2 rounded-full hover:opacity-80"
            >
              <FcGoogle className="text-white" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-2 grid grid-cols-2">
          <div className="md:ml-24 xl:ml-40">
          <h3 className="text-black text-2xl font-semibold mb-4 relative ">
            Links
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(0,64,255)]"></span>
          </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[rgb(0,64,255)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[rgb(0,64,255)]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[rgb(0,64,255)]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[rgb(0,64,255)]">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-[rgb(0,64,255)]">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="text-white text-xl mb-4">&nbsp;</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[rgb(0,64,255)]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,64,255)]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,64,255)]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,64,255)]">
                  Expert Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,64,255)]">
                  Latest News
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Subscribe Section */}
        <div className="md:col-span-1">
          <h3 className="text-black text-2xl font-semibold mb-6 relative ">
            Subscribe
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[rgb(0,64,255)]"></span>
          </h3>
          <p className="mb-4">
            Don't miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-slate-400 px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-[rgb(0,64,255)] px-4 py-2">
              <FaEnvelope className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#2b2b2b]">
        <div className="container mx-auto px-20 py-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            Copyright © 2018, All Right Reserved{" "}
            <a href="#" className="text-[#3700ff] hover:text-[rgb(0,64,255)]">
              Rkcsc.in
            </a>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[rgb(0,64,255)]">
              Home
            </a>
            <a href="#" className="hover:text-[rgb(0,64,255)]">
              Terms
            </a>
            <a href="#" className="hover:text-[rgb(0,64,255)]">
              Privacy
            </a>
            <a href="#" className="hover:text-[rgb(0,64,255)]">
              Policy
            </a>
            <a href="#" className="hover:text-[rgb(0,64,255)]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
