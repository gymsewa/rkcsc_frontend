import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import AppContext from "../AppContext/AppContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Core from "../core/Core";
import Loader2 from "./Loader2";
import AllOrdersTable from "./AllOrdersTable";
import { IoClose } from "react-icons/io5";

const ManageOrders = () => {
  // const appContext = useContext(AppContext);
  // const navigate = useNavigate();
  const { getAdminAllOrders } = Core();

  const detailsRef = useRef(null);
  const [allOrders, setAllOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentFilter, setSelectedPaymentFilter] = useState(null);
  const [selectedOrderFilter, setSelectedOrderFilter] = useState("All");
  const [showDetails, setShowDetails] = useState(false);

  const handleAllOrders = async (paymentFilter = null, orderFilter = "All") => {
    try {
      setIsLoading(true);
      const response = await getAdminAllOrders(paymentFilter, orderFilter);
      if (response?.orderList) {
        console.log("all orders", response?.orderList);
        setAllOrders(response.orderList);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentFilter = (filter) => {
    setSelectedPaymentFilter(filter);
    handleAllOrders(filter, selectedOrderFilter);
  };

  const handleOrderFilter = (filter) => {
    setSelectedOrderFilter(filter);
    handleAllOrders(selectedPaymentFilter, filter);
  };

  useEffect(() => {
    handleAllOrders();
  }, []);

  useEffect(() => {
    // to close create assistant card on click outside
    const handleClose = (e) => {
      if (detailsRef.current && !detailsRef.current.contains(e.target)) {
        setShowDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [detailsRef]);

  return (
    <>
      <div
        className=" text-slate-100 font-semibold text-md  
        flex flex-col gap-4 px-[2%] py-6
        backdrop  bg-opacity-10 bg-gradient-to-b from-gray-700/20 to-gray-950/20 "
      >
        <div>
          <div className="flex flex-col mb-3">
            <span className="text-black text-lg">
              Filter based on payment status
            </span>
            <div className="flex flex-wrap mt-2 md:gap-8 gap-4">
              {[null, "Initiated", "Success", "Error"].map((filter) => (
                <button
                  key={filter || "All"}
                  onClick={() => handlePaymentFilter(filter)}
                  className={clsx("tabButtons", {
                    "bg-gradient-to-r from-[#007bff] to-[#00bfff]":
                      selectedPaymentFilter === filter,
                  })}
                >
                  {filter || "All Payments"}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-lg">
              Filter based on order status
            </span>
            <div className="flex flex-wrap mt-2 md:gap-8 gap-4">
              {[
                "All",
                "Processing",
                "Completed",
                "Pending",
                "Refunded",
                "Cancelled",
              ].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleOrderFilter(filter)}
                  className={clsx("tabButtons", {
                    "bg-gradient-to-r from-[#007bff] to-[#00bfff]":
                      selectedOrderFilter === filter,
                  })}
                >
                  {filter === "All" ? "All Orders" : `${filter} Orders`}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full md:h-[59vh] h-[66vh] justify-center">
          <div className="flex flex-col h-full w-full gap-4">
            <div className="h-full w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg border border-zinc-500 shadow-lg">
              {isLoading ? (
                <div className="h-full w-full flex justify-center items-center">
                  <Loader2 />
                </div>
              ) : allOrders?.length > 0 ? (
                <AllOrdersTable
                  allOrders={allOrders}
                  showDetails={showDetails}
                  setShowDetails={setShowDetails}
                />
              ) : (
                <span className="flex justify-center items-center text-xl font-bold h-full text-black">
                  No orders found.
                </span>
              )}
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="fixed top-[10%] inset-0 z-40 flex justify-center items-center bg-black bg-opacity-50">
            <div
              className="relative p-8 rounded-lg h-5/6 w-1/2 bg-stone-600 text-slate-200 "
              ref={detailsRef}
            >
              <button
                className="absolute flex text-white justify-center items-center right-[1%] top-[1%]"
                onClick={() => {
                  setShowDetails(false);
                }}
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageOrders;
