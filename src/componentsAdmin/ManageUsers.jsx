import React, { useEffect, useState, useContext, useRef } from "react";
import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import AppContext from "../AppContext/AppContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaRegUser, FaUserEdit } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineCurrencyRupee,
} from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import supportIcon from "../assets/support (1).png";
import serviceIcon from "../assets/digital-servicesRK.png";
import accountIcon from "../assets/user-account.png";
import Core from "../core/Core";
import noOrder from "../assets/no-products.png";
import emptyWallet from "../assets/walletEmpty.png";
import UsersTable from "./UsersTable";
import MemberTable from "./MemberTable";
import Loader2 from "./Loader2";
import AllAdmins from "./AllAdmins";
import { IoClose } from "react-icons/io5";

const ManageUsers = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const { getAllUsers } = Core();
  const detailsRef = useRef(null);
  const createAdminRef = useRef(null);
  const [isAllUsersClicked, setIsAllUsersClicked] = useState(true);
  const [isAllMemberClicked, setIsAllMemberClicked] = useState(false);
  const [isAllAdminClicked, setIsAllAdminClicked] = useState(false);
  const [allUsers, setAllUsers] = useState(null);
  const [allMembers, setAllMembers] = useState(null);
  const [allAdmins, setAllAdmins] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [createAdmin, setCreateAdmin] = useState(false);

  const getUserData = async (userType) => {
    setIsLoading(true);
    try {
      const response = await getAllUsers(userType);
      if (response) {
        // console.log("All fetched users", response);

        if (response?.user) {
          const allUsersData = response?.user;
          console.log("All Users fetched", allUsersData);
          if (userType === "user") {
            setAllUsers(allUsersData);
          } else if (userType === "member") {
            setAllMembers(allUsersData);
          } else if (userType === "admin") {
            setAllAdmins(allUsersData);
          }
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = () => {
    setIsAllUsersClicked(true);
    setIsAllMemberClicked(false);
    setIsAllAdminClicked(false);
    getUserData("user");
  };

  const handleMember = () => {
    setIsAllUsersClicked(false);
    setIsAllMemberClicked(true);
    setIsAllAdminClicked(false);
    getUserData("member");
  };

  const handleAdmin = () => {
    setIsAllUsersClicked(false);
    setIsAllMemberClicked(false);
    setIsAllAdminClicked(true);
    getUserData("admin");
  };

  useEffect(() => {
    getUserData("user");
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const handleClose = (e) => {
      if (createAdminRef.current && !createAdminRef.current.contains(e.target)) {
        setCreateAdmin(false);
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [createAdminRef]);

  return (
    <>
      <div
        className=" text-slate-100 font-semibold text-md  
        flex flex-col gap-4 px-[2%] py-6
        backdrop  bg-opacity-10 bg-gradient-to-b from-gray-700/20 to-gray-950/20 "
      >
        <div className="flex flex-wrap mt-10 md:gap-8 gap-4">
          <button
            onClick={handleUser}
            className={clsx("tabButtons", {
              "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isAllUsersClicked,
            })}
          >
            All Users
          </button>
          <button
            onClick={handleMember}
            className={clsx("tabButtons", {
              "bg-gradient-to-r from-[#007bff] to-[#00bfff]":
                isAllMemberClicked,
            })}
          >
            All Members
          </button>
          <button
            onClick={handleAdmin}
            className={clsx("tabButtons", {
              "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isAllAdminClicked,
            })}
          >
            All Admins
          </button>
        </div>
        <div className=" flex w-full md:h-[69.5vh] h-[66vh] justify-center">
          {isAllUsersClicked ? (
            <div className="flex  flex-col h-full w-full gap-4">
              <div
                className="h-full w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg
         border border-zinc-500 shadow-lg 
         "
              >
                {isLoading ? (
                  <div className="h-full w-full flex justify-center items-cente ">
                    <Loader2 />
                  </div>
                ) : allUsers?.length > 0 ? (
                  <UsersTable
                    getUserData={getUserData}
                    allUsers={allUsers}
                  />
                ) : (
                  <span className="flex justify-center items-center text-xl font-bold h-full text-black">
                    {" "}
                    There are no registered users. Once you anyone signedUp on
                    our website, they will be reflected here.
                  </span>
                )}
              </div>
            </div>
          ) : null}

          {isAllMemberClicked ? (
            <div className="flex  flex-col h-full items-end w-full gap-4">
              <div
                className="h-full w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg
         border border-zinc-500 shadow-lg 
         "
              >
                {isLoading ? (
                  <div className="h-full w-full flex justify-center items-cente ">
                    <Loader2 />
                  </div>
                ) : allMembers?.length > 0 ? (
                  <MemberTable
                    getUserData={getUserData}
                    memberData={allMembers}
                  />
                ) : (
                  <span className="flex justify-center items-center text-xl font-bold h-full text-black">
                    {" "}
                    There are no registered Members. Once you anyone signedUp on
                    our website, they will be reflected here.
                  </span>
                )}
              </div>
            </div>
          ) : null}

          {isAllAdminClicked ? (
            <div className="flex  flex-col h-full items-end w-full gap-4">
              <div
                className="h-full w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg
         border border-zinc-500 shadow-lg 
         "
              >
                {isLoading ? (
                  <div className="h-full w-full flex justify-center items-cente ">
                    <Loader2 />
                  </div>
                ) : allAdmins?.length > 0 ? (
                  <AllAdmins
                    getUserData={getUserData}
                    allAdmins={allAdmins}
                    setShowDetails={setShowDetails}
                    setCreateAdmin = {setCreateAdmin}
                  />
                ) : (
                  <span className="flex justify-center items-center text-xl font-bold h-full text-black">
                    {" "}
                    There are no orders placed. Once you avail some services
                    from us, they will be reflected here.
                  </span>
                )}
              </div>
            </div>
          ) : null}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageUsers;
