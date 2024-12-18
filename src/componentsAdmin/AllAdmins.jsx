import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { RiChatNewLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";
import { LuCrown } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const AllAdmins = ({
  getUserData,
  allAdmins,
  setCreateAdmin,
  setShowDetails,
  createAdminRef,
  createAdmin,
}) => {
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
    <div className="flex flex-row flex-wrap gap-8 p-5">
      {allAdmins.length > 0
        ? allAdmins.map((admins, index) => (
            <div
              className=" bg-blue-400 h-52 w-48 rounded-2xl bg-clip-padding border border-gray-100 
                 flex flex-col items-center justify-center gap-2 text-black text-xl 
                 font-bold cursor-pointer hover:scale-105 transition-all duration-150"
              onClick={() => {
                setShowDetails(true);
              }}
            >
              <div className="w-[45%] h-[40%] rounded-full flex bg-white justify-center items-center overflow-hidden">
                <img
                  src={admins?.photoUrl}
                  alt="adminImg"
                  className="w-full h-full object-cover rounded-full select-none"
                  draggable={false}
                />
              </div>

              <span className="flex flex-col justify-center items-center gap-1">
                <span className="text-lg">
                  {admins?.firstName?.split(" ")[0]}
                </span>
                <span className="text-base text-gray-800">
                  {admins?.accountType === "admin" ? (
                    <span className="flex justify-center items-center gap-2">
                      <LuCrown />
                      Super Admin
                    </span>
                  ) : (
                    "Sub Admin"
                  )}
                </span>
              </span>
              {admins?.accountType !== "admin" && (
                <div className="flex gap-8 items-center justify-center">
                  <MdDelete className="cursor-pointer text-3xl hover:scale-110 transition-all duration-300 hover:text-red-600" />
                </div>
              )}
              {createAdmin && (
                <div className="fixed top-[10%] inset-0 z-40 flex justify-center items-center bg-black bg-opacity-50">
                  <div
                    className="relative p-8 rounded-lg h-5/6 w-1/2 bg-stone-600 text-slate-200 "
                    ref={createAdminRef}
                  >
                    <button
                      className="absolute flex text-white justify-center items-center right-[1%] top-[1%]"
                      onClick={() => {
                        setCreateAdmin(false);
                      }}
                    >

                      <IoClose className="text-2xl" />
                    </button>
                    <span className="text-lg text-white">
                  {admins?.firstName?.split(" ")[0]}
                </span>
                  </div>
                </div>
              )}
            </div>
          ))
        : "No admins found"}
      <div
        className=" bg-blue-300 h-52 w-44 rounded-2xl bg-clip-padding border border-gray-100 
                 flex flex-col items-center justify-center gap-4 text-black text-xl 
                 font-bold cursor-pointer hover:scale-105 transition-all duration-150"
        onClick={() => {
          setCreateAdmin(true);
        }}
      >
        <CiCirclePlus className="h-20 w-20 text-black " />
      </div>
    </div>
  );
};

export default AllAdmins;
