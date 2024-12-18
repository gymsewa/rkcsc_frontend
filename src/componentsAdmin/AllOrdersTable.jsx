import React, { useContext, useState } from "react";
import AppContext from "../AppContext/AppContext";
import clsx from "clsx";
import editOrder from "../assets/editOrder.png";
import Core from "../core/Core";
import { toast } from "react-toastify";

const AllOrdersTable = ({ allOrders,showDetails,setShowDetails }) => {
  const { deleteAndVerify } = Core();

  

  const notify = (text, time) => {
    toast.dismiss();

    toast.info(text, {
      toastId: "random1",
      closeButton: false,
      position: "top-center",
      autoClose: time ? time : 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  

  return (
    <div className="w-full h-full  mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3">Serial No</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Ordered Item</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Order status</th>
            <th className="px-4 py-2">User Type</th>
            <th className="px-4 py-2">Edit Order</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {allOrders?.length > 0 ? (
            allOrders.map((orders, index) => (
              <tr
                key={index}
                className="bg-transparent hover:bg-[#f5f5f537] transition-all duration-300"
              >
                <td className="px-4 py-4 text-center">{index + 1}</td>
                <td className="px-4 py-4 text-center">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(orders?.createdAt))}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.applicantFullName
                    ? orders?.applicantFullName.charAt(0).toUpperCase() +
                      orders?.applicantFullName?.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-4 text-center">{orders?.email}</td>
                <td className="px-4 py-4 text-center">
                  {orders?.applicantMobileNumber}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.productList?.productName}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.productList?.productPrice}
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="bg-opacity-50 h-6 rounded-md flex justify-center items-center text-center">
                    <p
                      className={clsx("rounded-md p-1 text-base", {
                        "text-yellow-800 bg-yellow-200":
                          orders.Status === "Processing",
                        "text-red-800 bg-red-200":
                          orders.Status === "Cancelled",
                        "text-green-800 bg-green-200":
                          orders.Status === "Completed",
                        "text-blue-800 bg-blue-200":
                          orders.Status === "Refunded",
                        "text-orange-600 bg-orange-200":
                          orders.Status === "Refunded",
                      })}
                    >
                      {orders.Status}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.paymentLink === "wallet debit" ? "Member" : "User"}
                </td>
                <td className="px-4 py-4 text-center justify-center items-center flex">
                  <span
                    onClick={() => {
                      setShowDetails(true);
                    }}
                    className="cursor-pointer px-3 py-1 bg-blue-700 text-white rounded-lg"
                  >
                    Details
                  </span>
                </td>
                {/* 
                <td className="px-4 py-4 text-center">
                  <div className="bg-opacity-50 h-6 rounded-md flex justify-center items-center text-center">
                    
                    <p
                      className={clsx("rounded-md p-1 text-base", {
                        "text-yellow-800 bg-yellow-200":
                          orders?.paymentData?.status === "PAYMENT_INITIATED",
                        "text-red-800 bg-red-200":
                          orders?.paymentData?.status === "PAYMENT_ERROR",
                        "text-green-800 bg-green-200":
                          orders?.paymentData?.status === "PAYMENT_SUCCESS",
                        "text-blue-800 bg-blue-200":
                          orders?.paymentData?.status === true,
                      })}
                    >
                      {orders.Status}
                    </p>
                  </div>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10} className="px-4 py-2 text-lg text-center">
                No orders
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrdersTable;
