import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import clsx from "clsx";
import DeleteUser from "../assets/deleteUser.png";
import ApproveMem from "../assets/approveMember.png";
import RejectMem from "../assets/rejectIcon.png";
import Core from "../core/Core";
import { toast } from "react-toastify";

const MemberTable = ({ memberData, getUserData }) => {
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

  const handleDeleteUser = async (userId, action) => {
    try {
      const response = await deleteAndVerify(userId, action);
      if (response) {
        
        if(action ==="updated") {
            notify("Member approved successfully.", 2000);
        }else {
            notify("Member deleted successfully.", 2000);
        }
        getUserData("member");
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

//   const handleVerifyMember = async (userId, action) => {
//     try {
//       const response = await deleteAndVerify(userId, action);
//       if (response) {
//         notify("Sucessfully deleted member", 2000);
//         getUserData("member");
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//     }
//   };

  return (
    <div className="w-full h-full mx-auto">
      <table className="w-full h-[10%] table-auto text-sm sm:text-base border border-gray-300">
        <thead className="bg-blue-500 text-gray-700 sticky top-0 z-10 text-lg">
          <tr>
            <th className="px-4 py-3">Serial No</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Firm Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Wallet</th>
            <th className="px-4 py-2">Document</th>
            <th className="px-4 py-2">Member Status</th>
            <th className="px-4 py-2">Delete Member</th>
          </tr>
        </thead>
        <tbody tbody className="overflow-y-auto max-h-[90%] text-black">
          {memberData?.length > 0 ? (
            memberData.map((memberData, index) => (
              <tr
                key={index}
                className="bg-transparent hover:bg-[#f5f5f537] transition-all duration-300"
              >
                <td className="px-4 py-5 text-center">{index + 1}</td>
                <td className="px-4 py-5 text-center">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(memberData?.createdAt))}
                </td>
                <td className="px-4 py-5 text-center">
                  {memberData?.firstName
                    ? memberData?.firstName.charAt(0).toUpperCase() +
                      memberData?.firstName?.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-5 text-center">
                  {memberData?.firstName
                    ? memberData?.firmName.charAt(0).toUpperCase() +
                      memberData?.firmName?.slice(1)
                    : ""}
                </td>
                <td className="px-4 py-5 text-center">{memberData?.email}</td>
                <td className="px-4 py-5 text-center">
                  {memberData?.phoneNumber}
                </td>
                <td className="px-4 py-5 text-center">{memberData?.wallet}</td>
                <td className="px-4 py-5 text-center">
                  <a
                    href={memberData?.documents}
                    className="px-3 py-2 bg-blue-700 text-white justify-center items-center rounded-xl"
                  >
                    Download
                  </a>
                </td>
                <td className="px-4 py-5 text-center">
                  <div className="bg-opacity-50 h-6 rounded-md flex justify-center items-center text-center">
                    <p
                      className={clsx("rounded-md p-1 text-base", {
                        "text-green-800 bg-green-200":
                          memberData.verifiedUser === true,
                      })}
                    >
                      {memberData.verifiedUser ? (
                        "Verified"
                      ) : (
                        <div className="flex justify-center items-center gap-5 ">
                          <img
                            src={ApproveMem}
                            alt="ApproveMem"
                            onClick={() => {
                              handleDeleteUser(memberData?._id, "updated");
                            }}
                            className="w-7 h-7 border-2 border-black cursor-pointer hover:scale-105 transition-all duration-150"
                          />
                          <img
                            src={RejectMem}
                            alt="RejectMem"
                            onClick={() => {
                              handleDeleteUser(memberData?._id, "deleted");
                            }}
                            className="w-7 h-7  cursor-pointer hover:scale-105 transition-all duration-150"
                          />
                        </div>
                      )}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4 text-center justify-center items-center flex">
                  <img
                    onClick={() => {
                      handleDeleteUser(memberData?._id, "deleted");
                    }}
                    src={DeleteUser}
                    alt="deleteUserIcon"
                    className="w-8 h-8 cursor-pointer hover:scale-105 transition-all duration-150"
                  />
                </td>
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

export default MemberTable;
