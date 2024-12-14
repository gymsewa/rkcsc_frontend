import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import clsx from "clsx";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import debitIcon from "../assets/debitIcon.png";
import creditIcon from "../assets/creditIcon.png";

const WalletHistory = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="w-full h-full mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Transaction Id</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {appContext.userInfoVal.walletHistory?.length > 0 ? (
            appContext.userInfoVal.walletHistory.map((history, index) => (
              <tr
                key={index}
                className="bg-transparent hover:bg-[#f5f5f537] transition-all duration-300"
              >
                <td className="px-4 py-4 text-center">
                  {history?.status === "debited" ? (
                    <img src={debitIcon} alt="debitIcon" className="w-6 h-6"/>
                  ) : (
                    <img src={creditIcon} alt="creditIcon" className="w-6 h-6"/>
                  )}
                </td>

                <td className="px-4 py-4 text-center">
                  {new Date(history?.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-4 text-center">
                  {history?.productName
                    ? history.productName.charAt(0).toUpperCase() +
                      history.productName.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-4 text-center">
                  {history?.transaction_id}
                </td>

                <td className="px-4 py-4 text-center flex justify-center items-center gap-1">
                  <MdOutlineCurrencyRupee /> {history?.amount}
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="bg-opacity-50 h-6 rounded-md flex justify-center items-center text-center">
                    <p
                      className={clsx("rounded-md p-1 text-base", {
                        "text-red-600 font-bold text-lg":
                          history?.status === "debited",

                        "text-green-600 font-bold text-lg":
                          history?.status === "credited",
                      })}
                    >
                      {history?.status === "debited" ? "Dr" : "Cr"}
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

export default WalletHistory;
