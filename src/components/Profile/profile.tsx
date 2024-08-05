"use client";
import Image from "next/image";
import ProfileImg from "@/assets/img/profile.jpg";

import { useState } from "react";

import "./profile.css";
const Profile = () => {
  const [ProfileBool, setProfilebool] = useState(false);

  return (
    <div className={`profile h-screen max-w-[1100px] mx-auto `}>
      {!ProfileBool ? (
        <div
          className={`p-center w-[300px] h-[400px] gap-4 border-[#202632] border-2 border-solid bg-[#fff] rounded-2xl flex flex-col justify-center items-center drop-shadow-[0px_0px_1rem_#ffffff] bg-[#fff] `}
          onClick={() => setProfilebool(true)}
        >
          <p className="font-extrabold text-3xl -tracking-tighter">KyoJin</p>
          <p className="font-extrabold text-3xl -tracking-tighter">Resume</p>
        </div>
      ) : (
        <Image
          src={ProfileImg}
          alt="프로필이미지"
          className={`p-center w-[300px] h-[400px] rounded-2xl mx-auto object-cover drop-shadow-[0px_0px_1rem_#ffffff]`}
        />
      )}
    </div>
  );
};

export default Profile;
