import React, { useContext, useState } from "react";
import AppContext from "../AppContext/AppContext";
import clsx from "clsx";
import DeleteUser from "../assets/deleteUser.png";
import Core from "../core/Core";
import { toast } from "react-toastify";

const UsersTable = ({ allUsers, getUserData }) => {
  const { deleteAndVerify } = Core();

  const [showDelete, setShowDelete] = useState(false);

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

  const handleDeleteUser = async (userId, action) => {
    try {
      const response = await deleteAndVerify(userId, action);
      if (response) {
        notify("Member deleted successfully.", 2000);
        getUserData("user");
        setShowDelete(false);
      }
    } catch (error) {
      console.error(error);
      
    } finally {
      setShowDelete(false);
    }
  };

  return (
    <div className="w-full h-full mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3">Serial No</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Delete User</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {allUsers.length > 0 ? (
            allUsers.map((users, index) => (
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
                  }).format(new Date(users?.createdAt))}
                </td>
                <td className="px-4 py-4 text-center">
                  {users?.firstName
                    ? users?.firstName.charAt(0).toUpperCase() +
                      users?.firstName?.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-4 text-center">{users?.email}</td>
                <td className="px-4 py-4 text-center">{users?.phoneNumber}</td>
                <td className="px-4 py-4 text-center justify-center items-center flex">
                  <img
                    onClick={() => {
                      setShowDelete(true);
                    }}
                    src={DeleteUser}
                    alt="deleteUserIcon"
                    className="w-8 h-8 cursor-pointer hover:scale-105 transition-all duration-150"
                  />
                </td>
                {/* <td className="px-4 py-4 text-center">
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
                </td> */}
                {showDelete && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="rounded-lg backdrop  bg-opacity-10 bg-gradient-to-b from-gray-500/50 to-gray-900/50 backdrop-blur-md border border-slate-500 shadow-lg  animate-fadeIn p-5">
                      <h2 className="text-lg font-bold mb-1 text-slate-100">
                        Confirm Delete
                      </h2>
                      <p className="mb-4 text-zinc-400 text-base">
                        Are you sure you want to delete this user?
                      </p>
                      <div className="flex justify-end">
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                          onClick={() => {
                            handleDeleteUser(users?._id, "deleted");
                          }}
                        >
                          Yes
                        </button>
                        <button
                          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                          onClick={() => {
                            setShowDelete(false);
                          }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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

export default UsersTable;