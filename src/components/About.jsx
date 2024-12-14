import React from "react";
import {
  FaFileAlt,
  FaCertificate,
  FaDesktop,
  FaCheckCircle,
  FaIdCard,
  FaPencilAlt,
  FaUniversity,
  FaPassport,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const services = [
  {
    name: "Document Processing",
    icon: FaFileAlt,
    description: "Efficient handling of all types of documents",
  },
  {
    name: "Certificate Applications",
    icon: FaCertificate,
    description: "Assistance with various certificate requests",
  },
  {
    name: "Online Applications",
    icon: FaDesktop,
    description: "Guidance for complex online application processes",
  },
  {
    name: "Aadhaar Services",
    icon: FaIdCard,
    description: "Aadhaar card applications and updates",
  },
  {
    name: "PAN Card Services",
    icon: FaPencilAlt,
    description: "New PAN card applications and corrections",
  },
  {
    name: "Passport Services",
    icon: FaPassport,
    description: "Assistance with passport applications and renewals",
  },
];

const features = [
  "Expert document handling",
  "Fast turnaround times",
  "Secure and confidential service",
  "Assistance with complex applications",
  "Multilingual support",
  "Regular status updates",
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    comment:
      "RK Common Service Center made my passport application process so smooth. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    comment:
      "I was amazed by their efficiency in handling my Aadhaar card update. Great service!",
  },
  {
    name: "Amit Patel",
    comment:
      "Their assistance with my scholarship application was invaluable. Thank you, RK Common Service Center!",
  },
];

const statistics = [
  { label: "AADHAAR CARD UPDATED", value: "1.2K+" },
  { label: "PAN CARD APPLIED", value: "1.5K+" },
  { label: "PASSPORT APPLIED", value: "0.3K+" },
  { label: "Years on market", value: "4.2+" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      {/* <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-2">RK Common Service Center</h1>
          <p className="text-2xl">Your One-Stop Solution for All Document Services</p>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* About Us Section */}
        <section className="mb-16 text-center animate__animated animate__fadeIn bg-gradient-to-r from-blue-50 to-white py-12 rounded-xl shadow-lg">
          <div className="text-center pb-10 px-0 mr-[4%] relative">
            <span className="absolute text-[#5f687b] left-0 right-0 z-10 font-bold text-[52px] uppercase">
              About Us
            </span>
            <h2 className="text-[38px] font-bold top-7 uppercase mb-5 pb-0 text-gray-800 relative z-10">
              About us
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mx-auto max-w-5xl">
            Welcome to RK Common Service Center, your trusted partner for all
            types of document processing and online applications. We excel at
            ensuring flawless completion of all types of Documents, Certificates
            & various other online applications, guaranteeing 100% accuracy
            every time. With years of experience and a dedicated team, we
            simplify complex processes and save you time and effort.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-16 md:px-[4%] text-center animate__animated animate__fadeInUp bg-gradient-to-l from-blue-100 to-blue-200 py-12 rounded-xl shadow-xl">
          <h2 className="text-5xl font-semibold mb-6 text-blue-800">
            What We Do
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mx-auto max-w-5xl mb-8">
            At our core, we specialize in seamlessly handling crucial tasks to
            ensure precision and accuracy. Whether it’s processing PAN Card and
            Aadhaar Card applications or navigating the intricacies of
            Competition Exams, we excel in delivering flawless results. Our
            commitment extends to various online applications, where we
            guarantee 100% accuracy every time. Clients trust us for our
            expertise, relying on our dedicated team to handle their important
            tasks with efficiency and meticulous attention to detail. With us,
            they find a reliable partner for a smooth and error-free experience
            in essential processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center justify-center text-center"
              >
                {/* Render the icon dynamically and center it */}
                <service.icon className="text-5xl text-blue-600 mb-4 transform transition-transform hover:rotate-12" />
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                  {service.name}
                </h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:px-[4%] bg-blue-100 py-12 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 md:px-[4%] text-center animate__animated animate__fadeInUp">
          <div className="text-center pb-10 px-0 mr-[4%] relative">
            <span className="absolute text-[#5f687b] left-0 right-0 z-10 font-bold text-[52px] uppercase">
              Testimonials
            </span>
            <h2 className="text-[38px] font-bold top-7 uppercase mb-5 pb-0 text-gray-800 relative z-10">
              Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <p className="text-lg text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-blue-800">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-16 text-center animate__animated animate__fadeInUp">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Let us handle your document needs with precision and care. Contact
              us today for a hassle-free experience!
            </p>
            <button className="bg-blue-800 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transform transition-transform hover:scale-110 duration-300">
              Contact Us Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">RK Common Service Center</h3>
              <p className="text-blue-200">Your trusted partner for all document services</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center">
                  <FaPhone className="mr-2" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center justify-center">
                  <FaEnvelope className="mr-2" />
                  <span>info@rkcommonservice.com</span>
                </li>
                <li className="flex items-center justify-center">
                  <FaClock className="mr-2" />
                  <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Services</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300 transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-blue-200">
            <p>&copy; 2023 RK Common Service Center. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
