import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="border-b border-gray-700 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">Find us</h4>
                <span className="text-gray-400">
                  Haldwani Uttarakhand India
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <FaPhone className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">Call us</h4>
                <span className="text-gray-400">+91 9119009400</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelopeOpen className="text-blue-500 text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">Mail us</h4>
                <span className="text-gray-400">info@rkcsc.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-6">
              <a href="index.html">
                <img
                  src="data:image/png;base64,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"
                  alt="Company Logo"
                  className="max-w-[200px]"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-6 text-lg font-bold">
            Rk Consultancy And CSC Services
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full text-white">
                <FaTwitter />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full text-white">
                <FaGooglePlusG />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul>
              {[
                "Home",
                "Services",
                "Portfolio",
                "Contact",
                "About us",
                "Contact us",
              ].map((link, index) => (
                <li key={index} className="mb-3">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-6">
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-700 text-white border border-gray-700"
              />
              <button className="absolute right-0 top-0 bg-blue-500 p-3 border border-blue-500 text-white">
                <FaTelegramPlane className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-5">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center">
          <div>
            <p className="text-gray-400 text-sm">
              Copyright &copy; 2018, All Right Reserved{" "}
              <a
                href="https://codepen.io/anupkumar92/"
                className="text-blue-500"
              >
                Anup
              </a>
            </p>
          </div>
          <div>
            <ul className="flex space-x-4">
              {["Home", "Terms", "Privacy", "Policy", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-500 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
