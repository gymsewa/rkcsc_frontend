import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import clsx from "clsx";

const Orders = () => {
  
  const appContext = useContext(AppContext);

  return (
    <div className="w-full h-full mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3">Serial No</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Applicant Name</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Order Status</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Acknowledgements</th>
            <th className="px-4 py-2">Check Status</th>
            <th className="px-4 py-2">Downloads</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {appContext.userInfoVal.orders?.length > 0 ? (
            appContext.userInfoVal.orders.map((orders, index) => (
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
                  {orders?.productList?.productName
                    ? orders?.productList?.productName.charAt(0).toUpperCase() +
                      orders?.productList?.productName.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.applicantFullName}
                </td>
                <td className="px-4 py-4 text-center">
                  INR {orders?.paymentData?.amount}
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
                      })}
                    >
                      {orders.Status}
                    </p>
                  </div>
                </td>
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
                </td>
                <td className="px-4 py-4 text-center">Acknowledgement</td>
                <td className="px-4 py-4 text-center">status</td>
                <td className="px-4 py-4 text-center">Downloads</td>
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

export default Orders;
