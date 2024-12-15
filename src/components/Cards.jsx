import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        OUR SERVICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center w-full h-60 sm:h-72 md:h-80">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
                <Link to={`/product/${product.id}`}>
                  <button className="group relative inline-block overflow-hidden rounded border-4 border-double border-grey-500 px-5 py-2 font-medium text-black-600">
                    <span className="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-zinc-700 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative group-hover:text-white">
                      VIEW DETAILS
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
