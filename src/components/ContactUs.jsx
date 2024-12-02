"use client";
import React, { useState } from "react";
import SocialICons from "./SocialIcons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
  };

  
  return (
    <div className={`flex mt-5`}>
      <div className=" bg-blue-50 rounded-3xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 p-5">
          <span className="text-4xl font-bold mb-4 font-sans text-gray-800">
            Get in touch
          </span>
          <p className="text-gray-600 font-sans mb-6">
            Get in touch with us and our experts and developers would love to
            contribute their expertise and insights and help you today.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 border rounded-sm  text-gray-700 bg-white"
                name="firstName"
                id="first-name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 border rounded-sm text-gray-700 bg-white"
                name="lastName"
                id="last-name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="md:grid grid-cols-2 gap-4 flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border rounded-sm text-gray-700 bg-white"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="p-2 border rounded-sm text-gray-700 bg-white"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded-sm text-gray-700 bg-white"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitMessage && (
              <p
                className={`mt-2 ${submitMessage.includes("error")
                    ? "text-red-500"
                    : "text-green-500"
                  }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <div className="bg-blue-200 text-gray-700 rounded-lg  flex flex-col md:p-14 p-8 items-center">
            <div>
              <h2 className="text-3xl text-[#d6ae48] font-sans font-bold mb-4 text-center">
                Contact Info
              </h2>
              <p className="font-bold font-sans mb-3 text-lg">Rk Consultancy And CSC Services</p>

              <p className="mb-4">
                <span className="font-semibold">Add: </span>
                Haldwani
                <br />
                Uttarakhand
                <br />
                India
              </p>
              <p className="mb-2">
                <span className="font-semibold">Ph: </span>
                <a href="tel:+919119009400" className="hover:text-blue-500">
                  , +91 9119009400
                </a>
                
              </p>
              <p>
                <span className="font-semibold">E-mail: </span>
                <a
                  href="mailto:info@rkcsc.in"
                  className="hover:text-blue-500"
                >
                  info@rkcsc.in
                </a>
              </p>
            </div>
            <div className="flex flex-wrap space-x-5 mt-5">
              <SocialICons/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
