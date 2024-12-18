import React from "react";
import { useParams } from "react-router-dom";
import {
  FaFileAlt,
  FaListAlt,
  FaCheckCircle,
  FaRegNewspaper,
} from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const products = [
    {
      id: 1,
      title: "Pan Card New (Individual)",
      description:
        "Permanent Account Number is known as PAN in short, and in simple words it is a 10-digit alphanumeric character used for identifying an entity. The Income Tax Department of India is responsible for issuing PAN in India, which is imprinted on a card hence known as PAN Card. Although the card is used mainly in taxation purposes it also serves as a photo identity card",
      requiredDocuments: [
        "Applicant Photo",
        "Applicant Adhaar Card’s Front Side",
        "Applicant Adhaar Card’s Back Side",
        "Applicant Signature",
      ],
      processFlow: [
        "Click on Apply Now",
        "Upload All Required Documents",
        "Submit And Pay Fees",
        "Download Acknowledgement Receipt on My Account",
        "E-Pan Card Will be Delivered to Registered Email After 7-10 days",
        "Hard Copy of pan card will be delivered through Speed post on Your Aadhar address within 20-25 days",
      ],
      imageUrl: "https://via.placeholder.com/150x350", // Example image URL with the new size
    },
    {
      id: 2,
      title: "Pan Card Correction (Individual)",
      description:
        "Permanent Account Number is known as PAN in short, and in simple words it is a 10-digit alphanumeric character used for identifying an entity. The Income Tax Department of India is responsible for issuing PAN in India, which is imprinted on a card hence known as PAN Card. Although the card is used mainly in taxation purposes it also serves as a photo identity card.",
      requiredDocuments: [
        "PAN Card Copy",
        "Proof of Identity",
        "Proof of Address",
        "Corrected Photograph",
      ],
      processFlow: [
        "Click on Apply for Correction",
        "Upload the Required Documents",
        "Submit and Pay the Correction Fees",
        "Download the Acknowledgement Receipt",
        "New PAN Card will be delivered to your address after correction.",
      ],
      imageUrl: "https://via.placeholder.com/150x350", // Example image URL with the new size
    },
    {
      id: 3,
      title: "Pan + Adhaar Card Link",
      description:
        "Linking your PAN Card with Aadhaar is mandatory for filing taxes in India. Ensure your PAN and Aadhaar are linked to avoid penalties and tax-related issues.",
      requiredDocuments: ["PAN Card", "Aadhaar Card"],
      processFlow: [
        "Visit the Government Portal to Link PAN and Aadhaar",
        "Enter PAN and Aadhaar Details",
        "Verify OTP Sent to Registered Mobile Number",
        "Successfully Link PAN with Aadhaar",
      ],
      imageUrl: "https://via.placeholder.com/150x350", // Example image URL with the new size
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Third Party Insurance (TP) for two-wheelers is a mandatory requirement in India. This coverage helps you with legal liabilities in case of accidents involving your vehicle.",
      requiredDocuments: [
        "Vehicle Registration Certificate (RC)",
        "Previous Insurance Policy (if applicable)",
        "Pollution Under Control (PUC) Certificate",
        "Valid ID Proof",
      ],
      processFlow: [
        "Select your Vehicle Model and Insurance Type",
        "Provide Necessary Documents",
        "Pay the Insurance Premium",
        "Receive your Insurance Policy and Certificate",
      ],
      imageUrl: "https://via.placeholder.com/150x350", // Example image URL with the new size
    },
  ];

  // Find the product based on the ID
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="container mx-auto px-6 py-8">
      {product ? (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
          <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#000080] leading-tight">
                  {product.title}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-4 py-1 font-medium text-black-600">
                    <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-gray-800 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative group-hover:text-white text-lg">
                      Apply Now
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/PANCard_32_What-is-PAN-Card-Fee-Know-Everything-About-It-800x500.jpg"
                  alt="Service Center Illustration"
                  width={450}
                  height={300}
                  className="w-full h-auto rounded-3xl"
                />
              </div>
            </div>
          </section>

          {/* Required Documents Section */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="mr-2 text-blue-600" />
              Required Documents
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {product.requiredDocuments.map((doc, index) => (
                <li key={index} className="text-lg flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Process Flow Section */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaListAlt className="mr-2 text-blue-600" />
              Process Flow
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              {product.processFlow.map((step, index) => (
                <li key={index} className="text-lg flex items-center">
                  <FaRegNewspaper className="mr-2 text-yellow-500" />
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Apply Now Button */}
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center">
                <FaCheckCircle className="mr-2" />
                Apply Now
              </span>
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-red-600">Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
