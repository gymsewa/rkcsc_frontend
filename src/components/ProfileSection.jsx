import React from "react";
import ProfileTabs from "./ProfileTabs";

const ProfileSection = () => {
  return (
    <>
      <div className="">
        <div className="text-center pb-2 px-0 mr-[4%] relative">
          <span className="absolute text-[#5f687b] left-0 right-0 z-10 font-bold text-[45px] uppercase">
            Your Profile
          </span>
          <h2 className="text-[35px] font-bold top-7 uppercase mb-5 pb-0 text-gray-800 relative z-10">
            Your Profile
          </h2>
        </div>
        <div
          className=" text-slate-100 font-semibold text-md  
        flex flex-col gap-4 px-[4%] py-6
        backdrop  bg-opacity-10 bg-gradient-to-b from-gray-700/20 to-gray-950/20 "
        >
          
            <ProfileTabs />
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
