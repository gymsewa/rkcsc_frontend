import React from "react";

export const ProductCards = ({ product }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl transition-all ease-in-out rounded-lg overflow-hidden w-full max-w-sm">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          width={500}
          height={300}
          loading="lazy"
          className="object-cover rounded-lg w-full h-48 transition-all duration-500 hover:scale-102"
        />
      </div>

      <div className="p-4 space-y-2 cursor-pointer">
        <h3 className="text-xl font-sans font-semibold flex justify-start items-start gap-2 text-blue-800">
          {/* <img
              src="/assets/icons/apartmentsIcon.png"
              alt="Apartment icon"
              className="h-[24px] w-[24px]"
            /> */}
          {product.title}
        </h3>
        <span className="flex justify-center items-start gap-2">
          {/* <img
              src="/assets/icons/LocationIcon.png"
              alt="Location icon"
              className="h-[22px] w-[22px]"
            /> */}
          <p className="text-gray-500 text-[14px]">{product.description}</p>
        </span>
      </div>

      <div className="flex justify-between items-center px-4 py-3 mb-3">
        <span className="text-lg font-bold text-gray-800">{product.price}</span>
        <button className="bg-blue-500 text-white px-2 py-1 text-base rounded-md font-medium border border-blue-800 hover:bg-blue-700 transition-all duration-300 ease-in-out">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
