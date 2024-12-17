import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";
import AppContext from "../AppContext/AppContext";
import Orders from "./Orders";
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
import WalletHistory from "./WalletHistory";
import noOrder from "../assets/no-products.png";
import emptyWallet from "../assets/walletEmpty.png";

const ProfileTabs = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const [isClickedAccount, setIsClickedAccount] = useState(true);
  const [isClickedBilling, setIsClickedBilling] = useState(false);
  const [isClickedSupport, setIsClickedSupport] = useState(false);
  const [isWalletClicked, setIsWalletClicked] = useState(false);

  const handleAccount = () => {
    setIsClickedAccount(true);
    setIsClickedBilling(false);
    setIsClickedSupport(false);
    setIsWalletClicked(false);
  };

  const handleBilling = () => {
    setIsClickedBilling(true);
    setIsClickedAccount(false);
    setIsClickedSupport(false);
    setIsWalletClicked(false);
  };

  const handleWallet = () => {
    setIsWalletClicked(true);
    setIsClickedBilling(false);
    setIsClickedAccount(false);
    setIsClickedSupport(false);
  };

  const handleSupport = () => {
    setIsClickedSupport(true);
    setIsClickedAccount(false);
    setIsClickedBilling(false);
    setIsWalletClicked(false);
  };

  const handleLogout = () => {
    appContext.setUserInfo((prev) => ({
      ...prev,
      firstName: "rkcsc",
      phoneNumber: null,
      email: "noreply@rkcsc.in",
      picture: "https://picsum.photos/400/400",
      username: null,
      accountType: null,
      wallet: null,
      firmName: null,
      orders: [],
      userId: null,
      sessionId: null,
    }));

    navigate("/");
  };

  return (
    <>
      <div className="flex flex-wrap  md:gap-8 gap-4">
        <button
          onClick={handleAccount}
          // className={clsx(
          //   "px-4 rounded-lg flex justify-center items-center gap-1 text-slate-100 border-zinc-500 border-2 w-24 h-10 hover:scale-105 transition-all duration-300",
          //   {
          //     "bg-blue-800 text-slate-100": isClickedAccount === true,
          //     "bg-zinc-800 ": isClickedAccount === false,
          //   }
          // )}
          className={clsx("tabButtons", {
            "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isClickedAccount,
          })}
        >
          Account
        </button>
        <button
          onClick={handleBilling}
          className={clsx("tabButtons", {
            "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isClickedBilling,
          })}
        >
          Services
        </button>
        {appContext.userInfoVal.accountType === "member" && (
          <button
            onClick={handleWallet}
            className={clsx("tabButtons", {
              "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isWalletClicked,
            })}
          >
            Wallet History
          </button>
        )}
        {appContext.userInfoVal.accountType !== "admin" &&<button
          onClick={handleSupport}
          className={clsx("tabButtons", {
            "bg-gradient-to-r from-[#007bff] to-[#00bfff]": isClickedSupport,
          })}
        >
          Support
        </button>}
      </div>
      <div className=" flex w-full md:h-[63vh] h-[66vh] justify-center">
        {isClickedAccount && (
          <>
            <div
              className="md:h-full md:w-1/3 w-full h-[85%] relative text-slate-100 font-semibold text-md flex flex-col gap-4 p-4 rounded-lg
        border border-zinc-500 shadow-lg 
        items-center pt-5 md:pt-2"
            >
              <img
                src={appContext.userInfoVal.picture}
                className="rounded-full"
                alt={appContext.userInfoVal.firstName?.trim()?.split(" ")[0]}
                width={100}
                height={100}
              />
              <div className="md:w-[75%] w-full relative h-full flex flex-col text-slate-200">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-20 text-md text-gray-600 flex items-center gap-2">
                      <FaRegUser /> Name:
                    </div>
                    <div className="text-start text-black text-xl flex-1">
                      {appContext.userInfoVal.firstName}
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-20 text-md text-gray-600 flex items-center gap-2">
                      <MdOutlineEmail /> Email:
                    </div>
                    <div className="text-xl text-black flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                      {appContext.userInfoVal.email}
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-20 text-md text-gray-600 flex items-center gap-2">
                      <MdOutlinePhone /> Phone:
                    </div>
                    <div className="text-xl text-black flex-1">
                      {appContext.userInfoVal.phoneNumber}
                    </div>
                  </div>
                  {appContext.userInfoVal.accountType === "member" && (
                    <div className="flex justify-start items-center gap-4">
                      <div className="w-20 text-md text-zinc-600 flex items-center gap-2">
                        <GoOrganization /> Firm:
                      </div>
                      <div className="text-xl text-black flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                        {appContext.userInfoVal.firmName}
                      </div>
                    </div>
                  )}
                  {appContext.userInfoVal.accountType === "member" && (
                    <div className="flex justify-start items-center gap-4">
                      <div className="w-20 text-md text-zinc-600 flex items-center gap-2">
                        <IoWalletOutline /> Wallet:
                      </div>
                      <div className="text-xl text-black flex justify-start items-center flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                        <MdOutlineCurrencyRupee />
                        {appContext.userInfoVal.wallet}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between items-center absolute bottom-1 w-full">
                    <Link
                      to="/updateProfile"
                      className="flex bg-blue-800 rounded-lg items-center p-2 justify-center cursor-pointer hover:bg-blue-600"
                    >
                      <span className="text-slate-100">Update Profile</span>
                    </Link>
                    {/* <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Log out
                    </button> */}

                    <button className="BtnLogout" onClick={handleLogout}>
                      <div className="sign">
                        <svg viewBox="0 0 512 512">
                          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                      </div>

                      <div className="text">Logout</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {isClickedBilling ? (
          <div className="flex  flex-col h-full w-full gap-4">
            <div
              className="h-full w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg
         border border-zinc-500 shadow-lg 
         "
            >
              {appContext.userInfoVal.orders?.length > 0 ? (
                <Orders />
              ) : (
                <span className="flex flex-col justify-center items-center text-xl font-bold h-full text-black">
                  {" "}
                  <img
                    src={noOrder}
                    alt="noOrderImg"
                    className=" w-[100px] h-[100px]"
                  />
                  There are no orders placed. Once you avail some services from
                  us, they will be reflected here.
                </span>
              )}
            </div>
          </div>
        ) : null}

        {isWalletClicked && appContext.userInfoVal.accountType === "member" ? (
          <div className="flex  flex-col h-full items-end w-full gap-4">
            <div
              className="h-[85%] w-full overflow-y-auto text-slate-100 font-semibold text-md flex flex-col gap-4 rounded-lg
         border border-zinc-500 shadow-lg 
         "
            >
              {appContext.userInfoVal.walletHistory?.length > 0 ? (
                <WalletHistory />
              ) : (
                <span className="flex flex-col justify-center items-center text-xl font-bold h-full text-black">
                  {" "}
                  <img
                    src={emptyWallet}
                    alt="emptyWallet"
                    className=" w-[100px] h-[100px]"
                  />
                  There are no wallet history. Once you add amount in your wallet, they will be reflected here.
                </span>
              )}
            </div>
            <div
              className="h-[15%] w-full md:w[30%] lg:w-[30%]  text-slate-100 font-semibold text-md flex  p-4 rounded-lg
         border border-zinc-500 shadow-lg 
        items-center px-10 justify-between "
            >
              <div className="flex flex-col">
                <p className="text-blue-700 text-xl font-bold">
                  Current Credits
                </p>
                <p className="text-black text-xl flex justify-start items-center">
                  <MdOutlineCurrencyRupee />
                  {appContext.userInfoVal.wallet}
                </p>
              </div>
              <div className="bg-blue-700 text-slate-200 p-2 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <p>Add Credits</p>
              </div>
            </div>
          </div>
        ) : null}

        {isClickedSupport ? (
          <div
            className="h-full w-full text-slate-100 font-semibold text-md flex flex-col md:flex-row p-4 rounded-lg
 border border-zinc-500 shadow-lg 
        items-center md:px-20 px-5 justify-between"
          >
            <div className="flex flex-col">
              <p className="text-2xl text-gray-800">Need Support?</p>
              <p className="text-5xl font-bold text-blue-800">Contact Us</p>
            </div>
            <form className="md:w-1/2 w-full h-full">
              <div className="flex flex-col gap-6 justify-center items-center h-full w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-gray-200 text-black border-2 text-lg rounded-lg p-3 w-full bg-white"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-gray-200 text-black border-2 text-lg rounded-lg p-3 w-full bg-white"
                />
                <textarea
                  placeholder="Message"
                  className="border-gray-200 border-2 bg-white text-black text-lg rounded-lg p-3 w-full h-[40%] bg-transparent resize-none"
                ></textarea>
                <div className="flex w-full  justify-end">
                  <button
                    type="submit"
                    className="bg-blue-700 text-slate-100 rounded-lg px-4 py-2 hover:bg-blue-800 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProfileTabs;
