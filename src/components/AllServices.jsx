import React from "react";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";
const AllServices = () => {
  const products = [
    {
      id: 1,
      title: "Pan Card New (Individual)",
      description:
        "Immerse yourself in crystal-clear audio with our premium noise-cancelling headphones.",
      image:
        "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/PANCard_32_What-is-PAN-Card-Fee-Know-Everything-About-It-800x500.jpg",
      price: "INR 200.00",
    },
    {
      id: 2,
      title: "Pan Card Correction (Individual)",
      description:
        "Stay connected and track your fitness with our latest smartwatch model.",
      image:
        "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/PANCard_32_What-is-PAN-Card-Fee-Know-Everything-About-It-800x500.jpg",
      price: "INR 200.00",
    },
    {
      id: 3,
      title: "Pan + Adhaar Card Link",
      description:
        "Experience stunning visuals with our 4K Ultra HD TV, featuring vibrant colors and sharp contrast.",
      image:
        "https://im.indiatimes.in/content/2023/Mar/Untitled-2_64215a7a8f339.jpg?w=1200&h=900&cc=1&webp=1&q=75",
      price: "INR 1100.00",
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Enjoy your music on the go with our comfortable and high-quality wireless earbuds.",
      image:
        "https://www.probusinsurance.com/wp-content/uploads/2021/09/bajaj-allianz-two-wheeler-insurance.png",
      price: "INR 850.00",
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Enjoy your music on the go with our comfortable and high-quality wireless earbuds.",
      image:
        "https://www.probusinsurance.com/wp-content/uploads/2021/09/bajaj-allianz-two-wheeler-insurance.png",
      price: "INR 850.00",
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Enjoy your music on the go with our comfortable and high-quality wireless earbuds.",
      image:
        "https://www.probusinsurance.com/wp-content/uploads/2021/09/bajaj-allianz-two-wheeler-insurance.png",
      price: "INR 850.00",
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Enjoy your music on the go with our comfortable and high-quality wireless earbuds.",
      image:
        "https://www.probusinsurance.com/wp-content/uploads/2021/09/bajaj-allianz-two-wheeler-insurance.png",
      price: "INR 850.00",
    },
    {
      id: 4,
      title: "Two Wheeler Insurance TP Only",
      description:
        "Enjoy your music on the go with our comfortable and high-quality wireless earbuds.",
      image:
        "https://www.probusinsurance.com/wp-content/uploads/2021/09/bajaj-allianz-two-wheeler-insurance.png",
      price: "INR 850.00",
    },
  ];

  return (
    <div className="container relative mx-auto px-6   bg-gradient-to-r from-blue-100 to-blue-50 py-10 rounded-xl shadow-xl">
      <div className="text-center pb-10 px-0 mr-[4%] relative">
        <span className="absolute text-[#5f687b] left-0 right-0 z-10 font-bold text-[52px] uppercase">
          Services
        </span>
        <h2 className="text-[38px] font-bold top-7 uppercase mb-5 pb-0 text-gray-800 relative z-10">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
            <ProductCards  product={product} />
          </Link>
        ))}
      </div>
      

      {/* <div className="flex justify-center w-full items-center   mt-5">
        <Link to="/services" className="custom-btn btn-12">
          <span className="text-white">Click!</span>
          <span className="text-white">View All</span>
        </Link>
      </div> */}
    </div>
  );
};

export default AllServices;
