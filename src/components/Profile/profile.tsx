'use client'
import Image from 'next/image'
import ProfileImg from '@/assets/img/profile.jpg'

import { useEffect, useState } from 'react'

import './profile.css'
const Profile = () => {
  const [profileBool, setProfilebool] = useState(false)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    if (profileBool) {
      const timer = setTimeout(() => {
        setShowImage(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowImage(false)
    }
  }, [profileBool])
  return (
    <div className={`profile mt-4 relative h-screen max-w-[1100px] mx-auto`}>
      <div
        className={`p-center  w-[300px] h-[400px] gap-4 border-[#202632] border-2 border-solid 
bg-[#fff] rounded-2xl flex-center flex-col drop-shadow-[0px_0px_1rem_#ffffff] cursor-pointer 
${!profileBool ? 'z-10 visible opacity-100' : 'h-0 z-0 invisible opacity-0'} 
'transition-[opacity] delay-150 duration-500`}
        onClick={() => setProfilebool(true)}
      >
        <p className="font-extrabold text-3xl -tracking-tighter">KyoJin</p>
        <p className="font-extrabold text-3xl -tracking-tighter">Resume</p>
      </div>
      <Image
        src={ProfileImg}
        alt="프로필이미지"
        className={`transition-all delay-100 duration-[350ms] 
          ${
            showImage
              ? 'absolute top-[0px] left-0 translate-x-[0px] translate-y-[0px]'
              : 'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
          } 
        w-[300px] h-[400px] rounded-2xl mx-auto object-cover drop-shadow-[0px_0px_1rem_#ffffff]`}
      />
    </div>
  )
}

export default Profile
