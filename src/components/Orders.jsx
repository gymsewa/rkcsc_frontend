import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const Orders = () => {
  const database = [
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
    {
      invoiceId: "#12345",
      billingDate: "23 April 2024",
      plan: "basic",
      amount: "Rs. 20000",
      status: "paid",
    },
  ];

  const appContext = useContext(AppContext);

  return (
    <div className="w-full h-full mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3">Serial No</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {appContext.userInfoVal.orders?.length > 0 ? (
            appContext.userInfoVal.orders.map((orders, index) => (
              <tr
                key={index}
                className="bg-transparent hover:bg-[#f5f5f537] transition-all duration-300"
              >
                <td className="px-4 py-4 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-4 text-center">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(orders?.createdAt))}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.productList?.productName}
                </td>
                <td className="px-4 py-4 text-center">
                  {orders?.paymentData?.amount}
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="bg-opacity-50 h-6 rounded-md flex justify-center items-center text-center">
                    <p className="text-green-800 bg-green-200 rounded-md p-1 text-base">
                      {orders.Status}
                    </p>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-4 py-2 text-center">
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
